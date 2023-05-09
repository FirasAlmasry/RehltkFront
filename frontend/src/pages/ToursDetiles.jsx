import { Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import TravlForm from "../components/TravlForm";
import SimpleAccordion from "../components/Accordeon";
import Section from "../components/Ui/Section";

function ToursDetiles() {
    const theme = useTheme();
    return (
        <Box>
            <img
                src="/images/Artboard-1-1-1.png"
                alt=""
                style={{
                    height: 600,
                    width: "100%",
                    objectFit: "fill",
                }}
            />
            {/* <Box
                component="img"
                src={`https://drive.google.com/uc?export=view&id=${
                    tour?.imageUrl.split("/")[5]
                }`}
                alt=""
                sx={{
                    height: { xs: 250, md: 550 },
                    width: "100%",
                    objectFit: "fill",
                }}
            /> */}
            <Container
                sx={{
                    mt: 4,
                    mb: 4,
                }}
            >
                <Typography variant="h4" component="h3" fontWeight={"bold"} color={"#F4981D"} textAlign={"center"} mb={8}>
                    برنامج سياحي 10 ايام في ماليزيا
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    سافر واستمتع معنا بقضاء إجازة بين أحضان الطبيعة في ماليزيا الجميلة.
                    12 يوم (11 ليلة)بين العاصمة كوالالمبور و سيلانجور والطبيعة الساحرة في جزر لنكاوي وبينانغ.
                    {/* {tour?.desc
                        ? tour?.desc
                        : `استمتع برحلة 10 أيام في ${tour?.title} وزيارة جميع المعالم السياحية في ${tour?.title} والأنشطة السياحية.`} */}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                        typography: { xs: "h5", md: "h5" },
                    }}
                    color={theme.palette.secondary.main}
                >
                    العرض يشمل التالي:
                </Typography>

                <ul style={{ fontSize: "18px" }}>
                    <li>الإستقبال و التوديع من والى المطار</li>
                    <li>حجوزات الفنادق كاملة</li>
                    <li>الإفطار في الفنادق ( اوبن بوفيه ) طوال مدة الإقامة </li>
                    <li>جولات سياحية يوميا بسيارة خاصة حديثة </li>
                    <li>
                        جميع الإنتقالات بسيارة سياحية خاصة بكم فقط لتستمتع
                        بالخصوصية مع عائلتك او اصدقائك
                    </li>
                    <li>سائق خاص مع البترول </li>
                    <li>شرائح اتصال وانترنت للشخصين </li>
                    <li>السعر شامل كافة الضرائب</li>
                    <li>خدمة عملاء بالعربي طوال مدة الرحلة</li>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            mt: 2,
                            typography: { xs: "h6", md: "h6" },
                        }}
                    >
                        العرض لا يشمل :
                    </Typography>
                    <li>
                        تذاكر الطيران الدولي ويمكنكم الحجز لدينا ( بدون رسوم
                        إضافية ) .
                    </li>
                    <Typography
                        variant="h3"
                        sx={{
                            mb: 2,
                            mt:2,
                            typography: { xs: "h5", md: "h5" },
                        }}
                        color={theme.palette.secondary.main}
                    >
                        يوميا الرحلة:
                    </Typography>
                    <Typography fontWeight={"bold"}>قد تختلف الجولات بناءً على أسباب خارجية كـ أحوال الطقس و اعمال الصيانة.. إلخ</Typography>
                </ul>
                <SimpleAccordion />
                <Section title="أحجز الأن">
                <TravlForm />
            </Section>
            </Container>
        </Box>
    );
}

export default ToursDetiles;
