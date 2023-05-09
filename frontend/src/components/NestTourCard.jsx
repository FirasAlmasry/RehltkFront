import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NestTourCard() {
    const navigate = useNavigate();
  return (
    <Card
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                borderRadius: "200px",
                overflow: "inherit",
                margin: "10px",
                cursor: "pointer",
            }}
            onClick={() => navigate("/tourDetails")}
        >
            <CardMedia
                component="img"
                image="images/tours.jpg"
                alt="green iguana"
                style={{ borderRadius: "200px" }}
            />

            <Typography
                gutterBottom
                variant="h5"
                component="p"
                sx={{
                    position: "absolute",
                    top: "50px",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: "100%",
                    height: "100%",
                    color: "#0D68A1",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "center",
                    textAlign: "center",
                    fontWeight: "bold",
                    paddingBottom: 2,
                }}
            >
                جورجيا
            </Typography>
        </Card>
  )
}

export default NestTourCard