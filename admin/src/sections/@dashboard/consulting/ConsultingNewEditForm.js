import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// form
import { useForm, Controller } from "react-hook-form";
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

// ----------------------------------------------------------------------

ConsoltingNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentConsolting: PropTypes.object,
};

export default function ConsoltingNewEditForm({
    isEdit = false,
    currentConsolting,
}) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewConsoltingSchema = Yup.object().shape({
        title: Yup.object({
            ar: Yup.string().required("title ar is required"),
            en: Yup.string().required("title en is required"),
        }),
        description: Yup.object({
            ar: Yup.string().required("description ar is required"),
            en: Yup.string().required("description en is required"),
        }),

        duration: Yup.string().required("duration is required"),

        imageUrl: Yup.mixed().required("Avatar is required"),

        price: Yup.number().required("price is required"),

        active: Yup.boolean().required("price is required"),
    });

    const defaultValues = useMemo(
        () => ({
            title: {
                ar: currentConsolting?.title?.ar || "",
                en: currentConsolting?.title?.en || "",
            },
            description: {
                ar: currentConsolting?.description?.ar || "",
                en: currentConsolting?.description?.en || "",
            },
            duration: currentConsolting?.duration || "",
            price: currentConsolting?.price || 5,
            imageUrl: currentConsolting?.imageUrl || null,
            active: currentConsolting?.active || true,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentConsolting]
    );

    const methods = useForm({
        resolver: yupResolver(NewConsoltingSchema),
        defaultValues,
    });

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
        if (isEdit && currentConsolting) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentConsolting]);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const oData = {
                description: {
                    ar: data.descriptionAr,
                    en: data.descriptionEn,
                },
                ...data,
            };
            console.log("DATA", oData);

            // await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            // navigate(PATH_DASHBOARD.consolting.list);
            console.log("DATA", data);
        } catch (error) {
            console.error(error);
        }
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

                        {isEdit && (
                            <FormControlLabel
                                labelPlacement="start"
                                control={
                                    <Controller
                                        name="active"
                                        control={control}
                                        render={({ field }) => (
                                            <Switch
                                                {...field}
                                                checked={
                                                    field.value !== "active"
                                                }
                                                onChange={(event) =>
                                                    field.onChange(
                                                        event.target.checked
                                                            ? "unActive"
                                                            : "active"
                                                    )
                                                }
                                            />
                                        )}
                                    />
                                }
                                label={
                                    <>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ mb: 0.5 }}
                                        >
                                            unActive
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "text.secondary" }}
                                        >
                                            Apply unActive consolting
                                        </Typography>
                                    </>
                                }
                                sx={{
                                    mx: 0,
                                    mb: 3,
                                    width: 1,
                                    justifyContent: "space-between",
                                }}
                            />
                        )}
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
                            <RHFTextField name="title.ar" label="Title ar" />
                            <RHFTextField name="title.en" label="Title en" />
                            <RHFTextField name="duration" label="Duration" />
                            <RHFTextField
                                name="price"
                                label="Price"
                                placeholder="0.00"
                                onChange={(event) =>
                                    setValue(
                                        "price",
                                        Number(event.target.value),
                                        { shouldValidate: true }
                                    )
                                }
                                InputLabelProps={{ shrink: true }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Box
                                                component="span"
                                                sx={{ color: "text.disabled" }}
                                            >
                                                $
                                            </Box>
                                        </InputAdornment>
                                    ),
                                    type: "number",
                                }}
                            />
                            <Grid item xs={6} md={6}>
                                <RHFSwitch
                                    name="active"
                                    labelPlacement="start"
                                    label={
                                        <>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{
                                                    mb: 0.5,
                                                }}
                                            >
                                                Is Active
                                            </Typography>
                                        </>
                                    }
                                    sx={{
                                        mx: 0,
                                        width: 1,
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                />
                            </Grid>
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
                                    Description Arabic
                                </Typography>

                                <RHFEditor simple name="description.ar" />
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
                            <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    Description English
                                </Typography>

                                <RHFEditor simple name="description.en" />
                            </Stack>
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create consolting" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
