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
import { useAddEmploymentMutation, useEditEmploymentMutation } from "../../../state/ApiEmployment";

// ----------------------------------------------------------------------

EmploymentNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentEmployment: PropTypes.object,
};

export default function EmploymentNewEditForm({ isEdit = false, currentEmployment }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewEmploymentSchema = Yup.object().shape({
        name: Yup.string().required("title ar is required"),
        description :Yup.string().required("description ar is required"),
        email: Yup.string().required("Email is required"),
        address: Yup.string().required("Address is required"),
        phone: Yup.string().required("phone is required"),
    });

    const defaultValues = useMemo(
        () => ({
            name: currentEmployment?.name || "",
            description : currentEmployment?.description || "",
            email: currentEmployment?.email || "",
            address: currentEmployment?.address || "",
            phone: currentEmployment?.phone || "+20",
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentEmployment]
    );

    const methods = useForm({
        resolver: yupResolver(NewEmploymentSchema),
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
        if (isEdit && currentEmployment) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentEmployment]);
    const [addEmployment, { isLoading }] = useAddEmploymentMutation()
    const [editEmployment, { isEmplolymentLoading }] = useEditEmploymentMutation()
    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            // eslint-disable-next-line no-lone-blocks
            {isEdit?await editEmployment({formData, id: currentEmployment._id }):await addEmployment(formData)}
            
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.employment.list);
            console.log("DATA", formData);
        } catch (error) {
            console.error(error);
        }
    };

    // const handleDrop = useCallback(
    //     (acceptedFiles) => {
    //         const file = acceptedFiles[0];

    //         const newFile = Object.assign(file, {
    //             preview: URL.createObjectURL(file),
    //         });

    //         if (file) {
    //             setValue("imageUrl", newFile, { shouldValidate: true });
    //         }
    //     },
    //     [setValue]
    // );

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
                {/* <Grid item xs={12} md={4}> */}
                    {/* <Card sx={{ pt: 10, pb: 5, px: 3 }}>
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
                        )} */}

                        {/* <Box sx={{ mb: 5 }}>
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
                        </Box> */}

                        {/* {isEdit && (
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
                                            Apply unActive Employment
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
                        )} */}
                    {/* </Card> */}
                {/* </Grid> */}

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
                            <RHFTextField name="name" label="name" />
                            <RHFTextField name="email" label="email" />
                            {/* <RHFTextField name="title.en" label="Title en" /> */}
                            <RHFTextField name="address" label="Address" />
                            <RHFTextField name="phone" label="Phone " />
                            {/* <Grid item xs={6} md={6}>
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
                            </Grid> */}
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
                        {/* <Grid
                            item
                            xs={12}
                            md={12}
                            sx={{
                                mt: 2,
                                minHeight: 50,
                            }}
                        > */}
                            {/* <Stack>
                                <Typography
                                    variant="subtitle2"
                                    sx={{ color: "text.secondary" }}
                                >
                                    Description English
                                </Typography>

                                <RHFEditor simple name="description.en" />
                            </Stack> */}
                        {/* </Grid> */}
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Employment" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
