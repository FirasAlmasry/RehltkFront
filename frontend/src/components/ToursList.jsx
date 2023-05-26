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
            <Grid container spacing={2}>
            <Divider
                primary="Inbox"
                sx={{
                    mt: 3,
                    mb: 3,
                }}
            />
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/LssuingTouristVisas"
                        title="تاشيرات سياحية"
                        image="/images/visa-passport.jpg"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/InternationalLicense"
                        title="رخصة القيادة دولية"
                        image="/images/lisinse.png"
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <ServiseCard
                        to="/BookingFlight"
                        title="حجز طيران - فنادق"
                        image="/images/Booking-Flights-through-Travel-Agents.jpg"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ToursList;
