import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function TorsCard({name,imageUrl,id}) {
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
                cursor: "pointer",
            }}
            height="300px"
            onClick={() => navigate(`/tours/${id}`)}
        >
            <CardMedia
                component="img"
                height="300px"
                image={imageUrl}
                alt="green iguana"
                style={{ borderRadius: "60px" }}
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
                {name}
            </Typography>
        </Card>
    );
}

export default TorsCard;
