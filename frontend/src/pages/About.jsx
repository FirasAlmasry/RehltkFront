import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import Header1 from "../components/Header1";
import IconSo from "../components/IconSo";

function About() {
    return (
        <Box>
            <IconSo />
            <Header1 title="رحلتك للسفر والسياحة " desc="من نحن" />
            <Container
                sx={{
                    mt: {md:"-70px", xs:"-20px",},
                    mb: 5,
                }}
            >
                <Box sx={{ flexDirection: {md:'row', xs:'column-reverse'} }} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                <Typography
                    variant="subtitle1"
                    color={"GrayText"}
                    sx={{
                        maxWidth: 1000,
                        fontSize: 20,
                    }}
                >
                    نحن مؤسسة رحلتك للسفر والسياحة، متخصصة في تغطية البرامج
                    السياحية حول العالم، بدأت نشاطها من مدينة الرياض في المملكة
                    العربية السعودية نسعى بشكل متواصل لخدمة العملاء على مستوى
                    الخليج بأكمله، لتغطية رغبات العملاء بتجربة رحلات متميزة
                    وآمنة ومختلفة احـجـز مـعـنـا وقـــول تــم ولا تـشـيـل هـم
                </Typography>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height={"425px"}
                    image="images/Images.png"
                />
                </Box>
            </Container>
        </Box>
    );
}

export default About;
