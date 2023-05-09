import { Grid } from "@mui/material";
import React from "react";
import TorsCard from "./TorsCard";

function ToursList() {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TorsCard />
                </Grid>
            </Grid>
        </>
    );
}

export default ToursList;
