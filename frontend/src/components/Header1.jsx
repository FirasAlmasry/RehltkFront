import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function Header1({ title, desc }) {
    const theme = useTheme();
    return (
        <Box
            height={200}
            // bgcolor={theme.palette.secondary.main}
            fontWeight={"bold"}
            style={{
                width: "100%",
                padding: "100px 50px 0 0",
                color: `${theme.palette.secondary.main}`,
            }}
        >
            <Typography variant="h4" component="h3" fontWeight={"bold"}>
                {title}
            </Typography>
            <Typography fontWeight={"bold"} color={"#F4981D"}> {desc}</Typography>
        </Box>
    );
}

export default Header1;
