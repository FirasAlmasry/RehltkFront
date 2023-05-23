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

ServiceTypeNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentServiceType: PropTypes.object,
};

export default function ServiceTypeNewEditForm({
    isEdit = false,
    currentServiceType,
}) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewServiceTypeSchema = Yup.object().shape({
        title: Yup.object({
            ar: Yup.string().required("title ar is required"),
            en: Yup.string().required("title en is required"),
        }),
    });

    const defaultValues = useMemo(
        () => ({
            title: {
                ar: currentServiceType?.title?.ar || "",
                en: currentServiceType?.title?.en || "",
            },
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentServiceType]
    );

    const methods = useForm({
        resolver: yupResolver(NewServiceTypeSchema),
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
        if (isEdit && currentServiceType) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentServiceType]);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            // await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            // navigate(PATH_DASHBOARD.ServiceType.list);
            console.log("DATA", data);
        } catch (error) {
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
                            <RHFTextField name="title.ar" label="Title ar" />
                            <RHFTextField name="title.en" label="Title en" />
                        </Box>

                        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                loading={isSubmitting}
                            >
                                {!isEdit
                                    ? "Create ServiceType"
                                    : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
