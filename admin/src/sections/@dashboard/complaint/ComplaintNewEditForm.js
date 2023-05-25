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
import { useAddComplaintMutation, useEditComplaintMutation } from "../../../state/ApiComplaint";

// ----------------------------------------------------------------------

ComplaintNewEditForm.propTypes = {
    isEdit: PropTypes.bool,
    currentComplaint: PropTypes.object,
};

export default function ComplaintNewEditForm({ isEdit = false, currentComplaint }) {
    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const NewComplaintSchema = Yup.object().shape({
        // ComplaintName: Yup.string().required("ComplaintName ar is required"),
        name: Yup.string().required("name ar is required"),
        description :Yup.string().required("description ar is required"),

        email: Yup.string().required("Email is required"),
        phone: Yup.string().required("phone is required"),

        // active: Yup.boolean().required("price is required"),
    });

    const defaultValues = useMemo(
        () => ({
            name: currentComplaint?.name || "",

            description : currentComplaint?.description || "",
            email: currentComplaint?.email || "",
            phone: currentComplaint?.phone || "+20",
        }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [currentComplaint]
    );

    const methods = useForm({
        resolver: yupResolver(NewComplaintSchema),
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
        if (isEdit && currentComplaint) {
            reset(defaultValues);
        }
        if (!isEdit) {
            reset(defaultValues);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEdit, currentComplaint]);
    const [addComplaint, { isLoading }] = useAddComplaintMutation()
    const [editComplaint] = useEditComplaintMutation()
    const onSubmit = async (formData) => {
        console.log(formData);
        try {
            // eslint-disable-next-line no-lone-blocks
            {isEdit?
               await editComplaint({formData, id: currentComplaint._id}).unwrap()
                :
                await addComplaint(formData).unwrap()
            }
            reset();
            enqueueSnackbar(!isEdit ? "Create success!" : "Update success!");
            navigate(PATH_DASHBOARD.complaint.list);
            console.log("DATA", formData);
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
                            <RHFTextField name="name" label="name" />
                            <RHFTextField name="email" label="email" />
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
                                {!isEdit ? "Create Complaint" : "Save Changes"}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </FormProvider>
    );
}
