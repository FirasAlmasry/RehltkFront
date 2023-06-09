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
import { useAddCompanyMutation, useEditCompanyMutation } from "../../../state/ApiCompany";
import getCurrentData from "../util/getCurrentData";

// ----------------------------------------------------------------------

CompanyNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentCompany: PropTypes.object,
};

export default function CompanyNewEditForm({ isEdit = false, currentCompany }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewCompanySchema = Yup.object().shape({
        companyName: Yup.string().required("companyName ar is required"),
        name: Yup.string().required("name ar is required"),
        description :Yup.string().required("description ar is required"),
        email: Yup.string().required("Email is required"),
        address: Yup.string().required("Address is required"),
        phone: Yup.string().required("phone is required"),
    });

    const defaultValues = useMemo(
        () => ({
            companyName: currentCompany?.companyName || "",
            name: currentCompany?.name || "",
            description : currentCompany?.description || "",
            email: currentCompany?.email || "",
            address: currentCompany?.address || "",
            phone: currentCompany?.phone || "+20",
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentCompany]
    );

    const methods = useForm({
        resolver: yupResolver(NewCompanySchema),
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
        if (isEdit && currentCompany) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentCompany]);
    const [addCompany, { isLoading }] = useAddCompanyMutation()
    const [editCompany] = useEditCompanyMutation()
    const onSubmit = async (formData) => {
        try {
            formData.date = getCurrentData()
            formData.time = new Date().toLocaleTimeString()
            // eslint-disable-next-line no-lone-blocks
            {isEdit?
               await editCompany({formData, id: currentCompany._id}).unwrap()
                :
                await addCompany(formData).unwrap()
            }
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.company.list);
        } catch (error) {
            enqueueSnackbar(error.data.message , {variant: 'error'})
            console.error(error);
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
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
                            <RHFTextField name="companyName" label="companyName" />
                            <RHFTextField name="name" label="name" />
                            <RHFTextField name="email" label="email" />
                            <RHFTextField name="address" label="Address" />
                            <RHFTextField name="phone" label="Phone" />
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
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Company" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
