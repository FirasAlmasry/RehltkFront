import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import TorsCard from "./TorsCard";
import { useGetCountryQuery } from "../state/ApiCountry";

function ToursList() {
    const [allCountryData, setAllCountryData] = useState([]);
    const { data, isLoading } = useGetCountryQuery();
    useEffect(() => {
        if (data) {
            setAllCountryData(data.data.countrys)
        }
    }, [data])
    return (
        <>
            <Grid container spacing={4}>
                {
                    allCountryData.map((country) =>
                        <Grid item xs={12} md={4}>
                            <TorsCard
                                name={country.name}
                                imageUrl={country.imageUrl}
                                id={country._id}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </>
    );
}

export default ToursList;
