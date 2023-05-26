import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ServiseCard({ image, title, to }) {
    const navigate = useNavigate();

    return (
        <Card
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                borderRadius: "60px",
                overflow: "inherit",
                margin: "10px",
                cursor: "pointer"
            }}
            height="300px"
            onClick={() => navigate(to)}
        >
            <CardMedia component="img"
                height="300px"
                style={{ borderRadius: "60px" }} src={image} alt={title} />

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
                {title}
            </Typography>
        </Card>
    );
}

export default ServiseCard;
