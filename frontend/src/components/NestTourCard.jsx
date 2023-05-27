import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NestTourCard({name,imageUrl,id}) {
    const navigate = useNavigate();
  return (
    <Card
            sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "inherit",
                margin: "10px",
                cursor: "pointer",
                boxShadow: "none"
            }}
            onClick={() => navigate(`/tourDetails/${id}`)}
        >
            <CardMedia
                component="img"
                image={imageUrl}
                alt="green iguana"
                style={{ height:"350px" }}
            />

            <Typography
                gutterBottom
                variant="h5"
                component="p"
                sx={{
                    // position: "absolute",
                    // top: "75px",
                    // left: 0,
                    // right: 0,
                    // bottom: 0,
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
                {name}
            </Typography>
        </Card>
  )
}

export default NestTourCard