import PropTypes from "prop-types";
import * as Yup from "yup";
import { useCallback, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// form
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useForm, Controller ,watch } from "react-hook-form";
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
    TextField,
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
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useAddSalesMutation, useEditSalesMutation } from "../../../state/ApiSales";
import { useGetCountryQuery } from "../../../state/ApiCountry";
import { useGetEmploymentQuery } from "../../../state/ApiEmployment";
// ----------------------------------------------------------------------

SalseNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentSalse: PropTypes.object,
};

dayjs.extend(utc);

export default function SalseNewEditForm({ isEdit = false, currentSalse }) {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const NewSalseSchema = Yup.object().shape({
        name: Yup.string().required("name ar is required"),
        // employee: Yup.string().required("employee ar is required"),
        city: Yup.string().required("city ar is required"),
        agent: Yup.string().required("agent ar is required"),
        packageWithoutFlightCost: Yup.number().required("packageWithoutFlightCost ar is required"),
        country: Yup.string().required("country is required"),
        depositOrFullPayment: Yup.string().required("depositOrFullPayment is required"),
        flightCost: Yup.number().required("flightCost is required"),
        packagePrice: Yup.number().required("sub packagePrice is required"),
        theAmountPaid: Yup.number().required("sub theAmountPaid is required"),
        phone: Yup.string().required("phone is required"),
        returnDate: Yup.date().required('Due date must be later than create date'),
        dateOfTravel: Yup.date().required('Due date must be later than create date'),
        paymentDate: Yup.date().required('Due date must be later than create date'),
    });

    const { data: dataEmp, isLoading: isEmpLoading } = useGetEmploymentQuery();
    const defaultValues = useMemo(
        () => ({
            name: currentSalse?.name || "",
            // employee: currentSalse?.employee || "",
            city: currentSalse?.city || "",
            agent: currentSalse?.agent || "",
            packageWithoutFlightCost: currentSalse?.packageWithoutFlightCost || 5,
            phone: currentSalse?.phone || "",
            country: currentSalse?.country || "",
            depositOrFullPayment: currentSalse?.depositOrFullPayment || "",
            flightCost: currentSalse?.flightCost || 5,
            theAmountPaid: currentSalse?.theAmountPaid || 5,
            packagePrice: currentSalse?.packagePrice || 5,
            returnDate: currentSalse?.returnDate || null,
            dateOfTravel: currentSalse?.dateOfTravel || null,
            paymentDate: currentSalse?.paymentDate || null,
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentSalse]
    );
    const { data, isLoading: isCountryLoading } = useGetCountryQuery({ page: 1, limit: 200 });
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
        console.log("🚀 ~ file: SalseNewEditForm.js:124 ~ onSubmit ~ formData:", formData)
        try {
            formData.employee = user._id || ''
            // eslint-disable-next-line no-lone-blocks
            {
                isEdit
                    ? await editSales({ formData, id: currentSalse._id }).unwrap()
                    : await addSalse(formData).unwrap()
            }

            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.user.list);
        } catch (error) {
            console.log("🚀 ~ file: SalseNewEditForm.js:138 ~ onSubmit ~ error:", error)
            
            enqueueSnackbar(error.data.message, { variant: 'error' });
        }
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>

                <Grid item xs={12} md={12}>
                    <Card sx={{ p: 3 }}>
                        <Box
                            rowGap={3}
                            columnGap={2}
                            display="grid"
                            gridTemplateColumns={{
                                xs: "repeat(1, 1fr)",
                                sm: "repeat(4, 1fr)",
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
                            <RHFTextField name="packageWithoutFlightCost" label="package Without FlightCost" />
                            <RHFTextField name="flightCost" label="flight Cost" />
                            <RHFTextField name="packagePrice" label="package Price" />
                            <RHFTextField name="theAmountPaid" label="the Amount Paid" />
                            <RHFTextField name="depositOrFullPayment" label="deposit Or Full Payment" />
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Controller
                                name="returnDate"
                                control={control}
                                render={({ field, fieldState: { error } }) => (
                                    <DatePicker
                                        label="return Date"
                                        value={dayjs.utc(field.value)}
                                        onChange={(newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        format="YYYY/MM/DD"
                                        renderInput={(params) => (
                                            <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
                                        )}
                                    />
                                )}
                            />
                            <Controller
                                name="dateOfTravel"
                                control={control}
                                render={({ field, fieldState: { error } }) => (
                                    <DatePicker
                                        label="date Of Travel"
                                        value={dayjs.utc(field.value)}
                                        onChange={(newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        format="YYYY/MM/DD"
                                        renderInput={(params) => (
                                            <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
                                        )}
                                    />
                                )}
                            />
                            <Controller
                                name="paymentDate"
                                control={control}
                                render={({ field, fieldState: { error } }) => (
                                    <DatePicker
                                        label="payment Date"
                                        value={dayjs.utc(field.value)}
                                        onChange={(newValue) => {
                                            field.onChange(newValue);
                                        }}
                                        format="YYYY/MM/DD"
                                        renderInput={(params) => (
                                            <TextField {...params} fullWidth error={!!error} helperText={error?.message} />
                                        )}
                                    />
                                )}
                            />

                            </LocalizationProvider>
                            
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
