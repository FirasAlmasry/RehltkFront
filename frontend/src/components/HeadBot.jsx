import { Box, Typography } from '@mui/material';
import React from 'react'
import Marquee from "react-marquee-slider";

function HeadBot() {
    return (
        <>
            <Box>
                <Marquee velocity={50} direction='ltr' style={{
                    width: '200px',
                    whiteSpace: 'nowrap',
                    backgroundColor: "#ddd",
                    color: "#000",
                    margin: "10px 0",
                    border: "1px solid #0d659d",
                    fontSize: "20px",

                }} >
                    <Typography style={{ margin: "10px", cursor: "pointer", fontSize: "26px" }} >حجز برامج سياحية </Typography>
                    <Typography style={{ margin: "10px", cursor: "pointer", fontSize: "26px" }} >تأشيرات سياحية</Typography>
                    <Typography style={{ margin: "10px", cursor: "pointer", fontSize: "26px" }} >حجز طيران</Typography>
                    <Typography style={{ margin: "10px", cursor: "pointer", fontSize: "26px" }} >حجز فنادق </Typography>
                    <Typography style={{ margin: "10px", cursor: "pointer", fontSize: "26px" }} >رخصة دولية </Typography>
                    <Typography style={{ margin: "10px", cursor: "pointer", fontSize: "26px" }} >خطط لسفرتك بكل سهولة مع رحلتك للسفر والسياحة </Typography>

                </Marquee>
            </Box>
        </>
    )
}

export default HeadBot