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
    MenuItem,
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

import { useAddSalesMutation, useEditSalesMutation } from "../../../state/ApiSales";
import { useGetCountryQuery } from "../../../state/ApiCountry";
import { useGetEmploymentQuery } from "../../../state/ApiEmployment";
// ----------------------------------------------------------------------

SalseNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentSalse: PropTypes.object,
};

export default function SalseNewEditForm({ isEdit = false, currentSalse }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewSalseSchema = Yup.object().shape({
        name: Yup.string().required("name ar is required"),
        // employee: Yup.string().required("employee ar is required"),
        city: Yup.string().required("city ar is required"),
        agent: Yup.string().required("agent ar is required"),
        packageWithoutFlightCost :Yup.number().required("packageWithoutFlightCost ar is required"),
        country: Yup.string().required("country is required"),
        flightCost: Yup.number().required("flightCost is required"),
        packagePrice: Yup.number().required("sub packagePrice is required"),
        phone: Yup.string().required("phone is required"),
    });

    const { data: dataEmp , isLoading: isEmpLoading } = useGetEmploymentQuery();
    const defaultValues = useMemo(
        () => ({
            name: currentSalse?.name || "",
            // employee: currentSalse?.employee || "",
            city: currentSalse?.city || "",
            agent: currentSalse?.agent || "",
            packageWithoutFlightCost : currentSalse?.packageWithoutFlightCost || 5,
            phone: currentSalse?.phone || "",
            country: currentSalse?.country || "",
            flightCost: currentSalse?.flightCost || 5,
            packagePrice: currentSalse?.packagePrice || 5,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentSalse]
    );
    const { data, isLoading: isCountryLoading } = useGetCountryQuery({page: 1, limit: 200});
    const methods = useForm({
        resolver: yupResolver(NewSalseSchema),
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
        if (isEdit && currentSalse) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentSalse]);
    const [addSalse, { isLoading }] = useAddSalesMutation()
    const [editSales, { isSalesLoading }] = useEditSalesMutation()
    const user = JSON.parse(localStorage.getItem('user'))
    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            formData.employee = user._id || ''
            // eslint-disable-next-line no-lone-blocks
            {isEdit
                ? await editSales({formData, id: currentSalse._id}).unwrap()
                : await addSalse( formData ).unwrap()
            }
            
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.salse.list);
            console.log("formData", formData);
        } catch (error) {
            console.log(error);
            enqueueSnackbar(error.data.message, {variant: 'error'});
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
                            <RHFTextField name="name" label="SalseName" />
                            <RHFTextField name="city" label="city" />
                            {/* {!isEmpLoading && <RHFSelect
                                name="employee"
                                label="employee"
                                autoWidth
                                sx={{
                                    maxWidth: "100%",
                                    '& .MuiFormHelperText-root': {
                                        mx: 0,
                                        mt: 1,
                                        textAlign: 'right',
                                    },
                                }}
                            >
                                {dataEmp?.data.employmentApplications.map((emp) => (
                                    <MenuItem key={emp?._id} value={emp?._id}>
                                        {emp?.name}
                                    </MenuItem>
                                ))}
                            </RHFSelect>
                            } */}
                            <RHFTextField name="agent" label="agent" />
                            <RHFTextField name="packageWithoutFlightCost" label="packageWithoutFlightCost" />
                            <RHFTextField name="flightCost" label="flightCost" />
                            <RHFTextField name="packagePrice" label="packagePrice" />
                            {!isCountryLoading && <RHFSelect
                                name="country"
                                label="country"
                                autoWidth
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
                                    <MenuItem key={country?._id} value={country?.name}>
                                        {country?.name}
                                    </MenuItem>
                                ))}
                            </RHFSelect>
                            }
                            <RHFTextField name="phone" label="phone" />
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
                        </Grid>
                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit ? "Create Salse" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
