import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import NestTourCard from "./NestTourCard";
import { useGetCountryIdQuery } from "../state/ApiCountry";
import { useParams } from "react-router-dom";
function ToursCity() {
    const [countryData, setCountryData] = useState([]);
    let { id } = useParams()
    const { data, isLoading } = useGetCountryIdQuery(id);
    console.log("🚀 ~ file: TorsCard.jsx:10 ~ TorsCard ~ data:", data)
    useEffect(() => {
        if (data) {
            setCountryData(data.data.tours)
        }
    }, [data])
    return (
        <>
            <Grid container spacing={4}>
                {
                    countryData?.map((country) =>
                        <Grid item xs={12} md={6}>
                            <NestTourCard
                                name={country.title}
                                imageUrl={country.imageUrl}
                                id={country._id}
                            />
                        </Grid>
                    )
                }
            </Grid>
        
        </>
    )
}

export default ToursCity