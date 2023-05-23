import { useState } from "react";
import {
    Box,
    Button,
    FormLabel,
    TextField,
    Typography,
    Alert,
} from "@mui/material";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import * as Yup from "yup";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useAddComplaintMutation } from "../state/ApiComplaint";

function ComplaintForm() {
    const NewComplaintSchema = Yup.object().shape({
        name: Yup.string().required("name ar is required"),
        description :Yup.string().required("description ar is required"),
        email: Yup.string().required("Email is required"),
        phone: Yup.string().required("phone is required"),
    });
    const {register, handleSubmit } = useForm({
        
        resolver: yupResolver(NewComplaintSchema),
    });
    // console.log("🚀 ~ file: ComplaintForm.jsx:32 ~ ComplaintForm ~ register:", register)

    const [ok, setOk] = useState(null);

    const [addComplaint, { isLoading }] = useAddComplaintMutation()
    const onSubmit = async (data) => {
        console.log(data);
        try {
            await addComplaint(data)
            console.log("DATA", data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Box>
            <Typography
                variant="h5"
                component="h3"
                sx={{
                    mb: 5,
                    fontWeight: "bold",
                    maxWidth: 600,
                }}
            >
                يرجى تزويدنا بالبيانات التالية حتى نتمكن من خدمتك:
            </Typography>
            {ok !== null && ok && (
                <Alert severity="success">تم ارسال الطلب بنجاح!</Alert>
            )}
            {ok !== null && !ok && (
                <Alert severity="error">
                    حدث مشكلة اثناء ارسال الطلب برجاء المحاولة مره اخرى بعد قليل
                </Alert>
            )}
            <Box component="form" gap={20} onSubmit={handleSubmit(onSubmit)}>
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <PermIdentityOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        الإسم ثلاثي:
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    name="name"
                    {...register('name')}
                    // onChange={(e) => setname(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <PhoneEnabledOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        الجوال:
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    name="phone"
                    {...register('phone')}
                    // onChange={(e) => setPhone(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <EmailOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        الأيميل:
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    name="email"
                    {...register('email')}
                    // onChange={(e) => setemail(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <ForumOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        وصف الشكوى:
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    name="description"
                    {...register('description')}
                    // onChange={(e) => setDesc(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />

                <br />
                <br />
                <FormLabel color="warning">
                    *جميع الشكاوى تخضع لرقابة مباشرة من الإدارة العامة
                </FormLabel>

                <br />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="secondary"
                    size="large"
                    sx={{
                        mt: 1,
                        mb: 1,
                        color: "white",
                    }}
                >
                    ارسال
                </Button>
            </Box>
        </Box>
    );
}

export default ComplaintForm;
