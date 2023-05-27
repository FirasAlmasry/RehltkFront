import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import TorsCard from "./TorsCard";
import { useGetCountryQuery } from "../state/ApiCountry";
import ServiseCard from "./ServiseCard";

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
            <Divider
                primary="Inbox"
                sx={{
                    my: 8,
                }}
            />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/LssuingTouristVisas"
                        title="تاشيرات سياحية"
                        image="/images/تاشيرات.jpg"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/InternationalLicense"
                        title="رخصة القيادة دولية"
                        image="/images/رخصا القيادة.jpg"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/BookingFlight"
                        title="حجز طيران - فنادق"
                        image="/images/حجز طيران.jpg"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ToursList;
