import { Grid } from "@mui/material";
import React from "react";
import NestTourCard from "./NestTourCard";
function ToursCity() {
    return (
        <>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <NestTourCard />
                </Grid>
                <Grid item xs={12} md={6}>
                    <NestTourCard />
                </Grid>
            </Grid>
        </>
    )
}

export default ToursCity