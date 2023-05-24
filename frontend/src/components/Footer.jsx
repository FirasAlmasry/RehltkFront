// import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import SotialIcon from "./SotialIcon";

function Footer() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 0,
                pt:2,
                gap: 4,
                background: "rgba(13, 104, 161, 0.3)"
            }}
        >
            <img src="/logo1.png" height={90} alt="logo" style={{
                padding: "15px",
                background: "#fff",
                borderRadius: "20px"
            }} />
            <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
                <Link
                    to="/"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        
                    }}
                >
                    <Typography fontWeight={"bold"}>الصفحة الرئيسية</Typography>
                </Link>
                <Link
                    to="/about"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        
                    }}
                >
                    <Typography fontWeight={"bold"}>من نحن</Typography>
                </Link>
                <Link
                    to="/order"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        
                    }}
                >
                    <Typography fontWeight={"bold"}>حجز برامج سياحية</Typography>
                </Link>
                <Link
                    to="/complaint"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        
                    }}
                >
                    <Typography fontWeight={"bold"}>ارسال شكوى</Typography>
                </Link>
                <Link
                    to="/companies"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        
                    }}
                >
                    <Typography fontWeight={"bold"}>طلبات الشركات</Typography>
                </Link>
                <Link
                    to="/employment"
                    style={{
                        color: "inherit",
                        textDecoration: "none",
                        fontSize: 15,
                        
                    }}
                >
                    <Typography fontWeight={"bold"}>توظيف</Typography>
                </Link>

            </Stack>
            <Typography fontWeight={"bold"}>جميع الحقوق محفوظة © رحلتك للسياحة 2021</Typography>
        </Box>
    );
}

export default Footer;
