import { Typography, useTheme } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import TravlForm from "../components/TravlForm";
import SimpleAccordion from "../components/Accordeon";
import Section from "../components/Ui/Section";
import { useGetToursIdQuery } from "../state/apiTours";
import { useParams } from "react-router-dom";

function ToursDetiles() {
    const [tourData, setTourData] = useState([]);
    let { id } = useParams()
    const { data, isLoading } = useGetToursIdQuery(id);
    console.log("🚀 ~ file: TorsCard.jsx:10 ~ TorsCard ~ data:", data)
    useEffect(() => {
        if (data) {
            setTourData(data.data)
        }
    }, [data])
    
    const theme = useTheme();
    return (
        <Box>
            <img
                src={tourData.imageUrl}
                alt=""
                style={{
                    height: 600,
                    width: "100%",
                    objectFit: "fill",
                }}
            />
            <Container
                sx={{
                    mt: 4,
                    mb: 4,
                }}
            >
                <Typography variant="h4" component="h3" fontWeight={"bold"} color={"#F4981D"} textAlign={"center"} mb={8}>
                    {tourData.title}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                        typography: { xs: "h5", md: "h3" },
                    }}
                >
                    
                    {tourData.subTitle}
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        mb: 5,
                        typography: { xs: "h5", md: "h5" },
                    }}
                    color={theme.palette.secondary.main}
                >
                    <div className="task-des" dangerouslySetInnerHTML={{
                    __html: tourData.description
                }}></div>
                        {/* {tourData.description} */}
                </Typography>
                <Section title="أحجز الأن">
                <TravlForm />
            </Section>
            </Container>
        </Box>
    );
}

export default ToursDetiles;
