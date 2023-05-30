import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// form
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { LoadingButton } from "@mui/lab";
import {
    Box,
    Card,
    Grid,
    Stack,
    Switch,
    Typography,
    FormControlLabel,
    InputAdornment,
    MenuItem,
    TextField,
    Button,
    Divider,
} from "@mui/material";
// utils
import { fData } from "../../../utils/formatNumber";
// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// assets
import { countries } from "../../../assets/data";
// components
import Label from "../../../components/label";
import { useSnackbar } from "../../../components/snackbar";
import FormProvider, {
    RHFSelect,
    RHFSwitch,
    RHFTextField,
    RHFEditor,
    RHFUploadAvatar,
} from "../../../components/hook-form";

import { useAddToursMutation, useEditToursMutation } from "../../../state/ApiTour";
import { useGetCountryQuery } from "../../../state/ApiCountry";
import TourNewEditDetails from "./TourNewEditDetails";
import Iconify from "../../../components/iconify/Iconify";

// ----------------------------------------------------------------------

TourNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentTour: PropTypes.object,
};

export default function TourNewEditForm({ isEdit = false, currentTour }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();
    const NewTourSchema = Yup.object().shape({
        title: Yup.string().required("title ar is required"),
        country: Yup.string().required("country ar is required"),
        price: Yup.number().required("price ar is required"),
        description: Yup.string().required("description ar is required"),
        subTitle: Yup.string().required("sub title is required"),
        duration: Yup.string().required("sub duration is required"),
        days: Yup.array().required("days ar is required"),
        imageUrl: Yup.mixed().required("Avatar is required"),
    });

    const defaultValues = useMemo(
        () => ({
            title: currentTour?.title || "",
            country: currentTour?.country || '',
            duration: currentTour?.duration || '',
            price: currentTour?.price || 5,
            days: currentTour?.days || [],
            description: currentTour?.description || "",
            subTitle: currentTour?.subTitle || "",
            imageUrl: currentTour?.imageUrl || null,
        }),

        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentTour]
    );

    const methods = useForm({
        resolver: yupResolver(NewTourSchema),
        defaultValues,
    });


    const optionsRole = [
        'all',
        'admin',
        'user',
    ];
    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const values = watch();

    useEffect(() => {
        if (isEdit && currentTour) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentTour]);
    const { data, isLoading: isCountryLoading } = useGetCountryQuery({ page: 1, limit: 200 });
    const [addTours, { isLoading }] = useAddToursMutation()
    const [editTours, { isToursLoading }] = useEditToursMutation()

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("title", data.title);
            formData.append("description", data.description);
            formData.append("imageUrl", data.imageUrl);
            formData.append("duration", data.duration);
            formData.append("price", data.price);
            formData.append("subTitle", data.subTitle);
            formData.append("country", data.country);
            formData.append("days", JSON.stringify(data.days));
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit
                    ? await editTours({ formData, id: currentTour._id }).unwrap()
                    : await addTours(formData).unwrap()
            }
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.tour.list);
        } catch (error) {
            enqueueSnackbar(error.data.message, { variant: 'error' });
        }
    };

    const [filterRole, setFilterRole] = useState('all');
    const handleFilterRole = (event) => {

        setFilterRole(event.target.value);
    };
    const handleDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            const newFile = Object.assign(file, {
                preview: URL.createObjectURL(file),
            });

            if (file) {
                setValue("imageUrl", newFile, { shouldValidate: true });
            }
        },
        [setValue]
    );
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'days',
    });

    const handleAdd = () => {
        append({
            title: '',
            description: '',
        });
    };

    const handleRemove = (index) => {
        remove(index);
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ pt: 10, pb: 5, px: 3 }}>
                        {isEdit && (
                            <Label
                                color={
                                    values.status === "active"
                                        ? "success"
                                        : "error"
                                }
                                sx={{
                                    textTransform: "uppercase",
                                    position: "absolute",
                                    top: 24,
                                    right: 24,
                                }}
                            >
                                {values.status}
                            </Label>
                        )}

                        <Box sx={{ mb: 5 }}>
                            <RHFUploadAvatar
                                name="imageUrl"
                                maxSize={3145728}
                                onDrop={handleDrop}
                                helperText={
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            mt: 2,
                                            mx: "auto",
                                            display: "block",
                                            textAlign: "center",
                                            color: "text.secondary",
                                        }}
                                    >
                                        Allowed *.jpeg, *.jpg, *.png, *.gif
                                        <br /> max size of {fData(3145728)}
                                    </Typography>
                                }
                            />
                        </Box>
                    </Card>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Card sx={{ p: 3 }}>
                        <Box
                            rowGap={3}
                            columnGap={2}
                            display="grid"
                            gridTemplateColumns={{
                                xs: "repeat(1, 1fr)",
                                sm: "repeat(2, 1fr)",
                            }}
                            alignItems={"center"}
                        >

                            {!isCountryLoading && <RHFSelect
                                name="country"
                                label="Country"
                                sx={{
                                    maxWidth: "100%",
                                    '& .MuiFormHelperText-root': {
                                        mx: 0,
                                        mt: 1,
                                        textAlign: 'right',
                                    },
                                }}
                            >
                                {data?.data.countrys.map((country) => (
                                    <MenuItem key={country?._id} value={country?._id}>
                                        {country?.name}
                                    </MenuItem>
                                ))}
                            </RHFSelect>
                            }
                            <RHFTextField name="title" label="title" />
                            <RHFTextField name="subTitle" label="subTitle" />
                            <RHFTextField name="price" label="price" />
                            <RHFTextField name="duration" label="duration" />
                        </Box>

                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                mt: 2,
                                minHeight: 50,
                            }}
                        >
                            <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    Description
                                </Typography>
                                <RHFEditor simple name="description" />
                            </Stack>

                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                mt: 2,
                                minHeight: 50,
                            }}
                        >
                            <Box sx={{ p: 3 }}>

                                <Stack divider={<Divider flexItem sx={{ borderStyle: 'dashed' }} />} spacing={3}>
                                    {fields.map((item, index) => (
                                        <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
                                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
                                                <RHFTextField
                                                    name={`days[${index}].title`}
                                                    label="Title"
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                                <RHFTextField
                                                    name={`days[${index}].description`}
                                                    label="Description"
                                                    InputLabelProps={{ shrink: true }}
                                                />
                                            </Stack>
                                            <Button
                                                color="error"
                                                startIcon={<Iconify icon="eva:trash-2-outline" />}
                                                onClick={() => handleRemove(index)}
                                            >
                                                Remove
                                            </Button>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Divider sx={{ my: 3, borderStyle: 'dashed' }} />
                                <Stack
                                    spacing={2}
                                    direction={{ xs: 'column-reverse', md: 'row' }}
                                    alignItems={{ xs: 'flex-start', md: 'center' }}
                                >
                                    <Button
                                        startIcon={<Iconify icon="eva:plus-fill" />}
                                        onClick={handleAdd}
                                        sx={{ flexShrink: 0 }}
                                    >
                                        Add Day
                                    </Button>
                                    <Stack
                                        spacing={2}
                                        justifyContent="flex-end"
                                        direction={{ xs: 'column', md: 'row' }}
                                        sx={{ width: 1 }}
                                    >
                                    </Stack>
                                </Stack>

                                <Stack spacing={2} sx={{ mt: 3 }}>
                                </Stack>
                            </Box>
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Tour" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
