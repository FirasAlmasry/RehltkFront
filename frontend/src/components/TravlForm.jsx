import React, { useState } from "react";
import {
    Alert,
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
} from "@mui/material";
import PhoneEnabledOutlinedIcon from '@mui/icons-material/PhoneEnabledOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import * as Yup from "yup";
// form
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAddUserOrderMutation } from "../state/ApiUserOrders";
import { useGetCountryQuery } from "../state/ApiCountry";
import { enqueueSnackbar } from "notistack";
import getCurrentData from "../util/getCurrentData";
const countrys = [
    "جورجيا ",
    "البوسنة ",
    "ازربيجان ",
    "سريلانكا ",
    "المالديف ",
    "البانيا ",
    "تايلاند ",
    "ماليزياء ",
    "اندونيسيا ",
    "موريشيوس ",
    "اوروبا جماعية ",
    "اوروبا حرة ",
    "حجز طيران ",
    "تأشيرات ",
];

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

function TravlForm() {
    const NewComplaintSchema = Yup.object().shape({
        // name: Yup.string().required("title ar is required"),
        // description: Yup.string().required("description ar is required"),
        // email: Yup.string().required("Email is required"),
        address: Yup.string().required("Address is required"),
        phone: Yup.string().required("phone is required"),
        country: Yup.string().required("country is required"),
    });
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({
        resolver: yupResolver(NewComplaintSchema),
    });
    const [bookingFlight, setBookingFlight] = useState(null);
    const { data, isLoading: isCountryLoading } = useGetCountryQuery()
    const [addUserOrder, { isLoading }] = useAddUserOrderMutation()
    const onSubmit = async (data) => {
        try {
            data.bookingFlight = bookingFlight
            data.date = getCurrentData()
            data.time = new Date().toLocaleTimeString()
            await addUserOrder(data).unwrap()
            reset()
            enqueueSnackbar("تم ارسال البيانات بنجاح")
        } catch (error) {
            enqueueSnackbar(error.data.message, {variant: 'error'});
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
                للطلب والأستفسار يرجي تزودينا ببياناتك وسنقوم  بالتواصل معك في اسرع وقت :
            </Typography>
            <Box component="form" gap={20} onSubmit={handleSubmit(onSubmit)}>
                {/* <Box display={"flex"} gap={2} alignItems={"center"}>
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
                    required
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
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                />
                {/* <Box display={"flex"} gap={2} alignItems={"center"}>
                    <EmailOutlinedIcon /> */}
                    {/* <Typography
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
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                /> */}
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
                    <LocationOnOutlinedIcon />
                    <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                        وين حاب تسافر:
                    </Typography>
                </Box>
                <TextField
                    fullWidth
                    select
                    placeholder="وين حاب تسافر"
                    defaultValue={"---"}
                    {...register('country')}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                >
                    {data?.data.countrys.map((country) => (
                        <MenuItem key={country?._id} value={country?.name}>
                            {country?.name}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <Box display={"flex"} gap={2} alignItems={"center"}>
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
                </Box> */}
                {/* <TextField
                    fullWidth
                    {...register('description')}
                    required
                    sx={{
                        mb: 1,
                        backgroundColor: "#FFF",
                        borderBottom: "1px solid",
                    }}
                /> */}
                <br />
                <br />
                <Typography
                        variant="h6"
                        component="h3"

                        sx={{
                            mb: 1,
                            maxWidth: 600,
                        }}
                    >
                    هل تم حجز الطيران ؟
                    </Typography>
                <FormControl
                    color="secondary"
                    required
                    onChange={(e) => setBookingFlight(e.target.value)}
                >
                    <RadioGroup row name="bookingFlight">
                        <FormControlLabel
                            value="نعم"
                            control={<Radio color="secondary" />}
                            label="نعم"
                        />
                        <FormControlLabel
                            value="لا"
                            control={<Radio color="secondary" />}
                            label="لا"
                        />
                    </RadioGroup>
                </FormControl>
                <Button
                    // onClick={() => setOk(true)}
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

export default TravlForm;
