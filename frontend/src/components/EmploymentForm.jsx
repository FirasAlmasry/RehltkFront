import React, { useState } from "react";
import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    TextField,
    Typography,
    Alert,
} from "@mui/material";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import axios from "axios";

import * as Yup from "yup";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddEmploymentMutation } from "../state/ApiEmployment";

const citys = [
    "الرياض",
    "جدة",
    "الدمام ",
    "الخبر",
    "مكة",
    "المدينة",
    "تابوك",
    "حائل",
    "الطائف",
    "اخري",
];

function EmploymentForm() {
    // const [phone, setPhone] = useState(null);
    // const [city, setCity] = useState(null);
    // const [name, setName] = useState(null);
    // const [age, setAge] = useState(null);
    // const [hasExpr, setHasExpr] = useState(null);
    // const [ok, setOk] = useState(null);
    const NewComplaintSchema = Yup.object().shape({
        name: Yup.string().required("title ar is required"),
        description :Yup.string().required("description ar is required"),
        email: Yup.string().required("Email is required"),
        address: Yup.string().required("Address is required"),
        phone: Yup.string().required("phone is required"),
    });
    const {register, handleSubmit } = useForm({
        
        resolver: yupResolver(NewComplaintSchema),
    });
    // console.log("🚀 ~ file: ComplaintForm.jsx:32 ~ ComplaintForm ~ register:", register)

    const [ok, setOk] = useState(null);

    const [addEmployment, { isLoading }] = useAddEmploymentMutation()
    const onSubmit = async (data) => {
        console.log(data);
        try {
            await addEmployment(data)
            console.log("DATA", data);
        } catch (error) {
            console.error(error);
        }
    };
    // const submitHandler = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const data = {
    //             phone,
    //             city,
    //             name,
    //             age,
    //             hasExpr,
    //             date: Date.now(),
    //         };
    //         const res = await axios.post(
    //             "http://localhost:8000/addEmployee",
    //             data
    //         );
    //         if (res.status === 200) setOk(true);
    //     } catch (error) {
    //         setOk(false);
    //     }
    // };
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
                يرجى تعبئة البيانات التالية:
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
                        اسمك الكريم
                    </Typography>
                    
                </Box>
                <TextField
                    fullWidth
                    {...register('name')}
                    // onChange={(e) => setPersonName(e.target.value)}
                    required
                    sx={{
                        mb: 1,

                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                {/* <Box display={"flex"} gap={2} alignItems={"center"}>
                    <ApartmentOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        اسم الشركة
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    required
                    {...register('companyName')}
                    // onChange={(e) => setCoumpanyName(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                /> */}
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
                        البريد الالكتروني:
                    </Typography>
                </Box>
                <TextField
                    type={"emile"}
                    fullWidth
                    required
                    {...register('email')}
                    // onChange={(e) => setEmail(e.target.value)}
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                <Box display={"flex"} gap={2} alignItems={"center"}>
                    <LocationOnOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        المدينة:
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    select
                    placeholder="مدينتك"
                    defaultValue={"---"}
                    {...register('address')}
                    // onChange={(e) => setCity(e.target.value)}/**
                    //  companyName
                    //  name
                    //  description
                    //  email
                    //  address
                    //  phone */
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                >
                    {citys.map((city) => (
                        <MenuItem key={city} value={city}>
                            {city}
                        </MenuItem>
                    ))}
                </TextField>
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
                        وصف الطلب
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    {...register('description')}
                    // onChange={(e) => setDesc(e.target.value)}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                <br />
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

export default EmploymentForm;
