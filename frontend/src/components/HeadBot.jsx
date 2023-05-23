import { Box, Typography } from '@mui/material';
import React from 'react'
import Marquee from "react-fast-marquee";

function HeadBot() {
    return (
        <>
            <Box>
                <Marquee autoFill={true} pauseOnHover={true} behavior='scroll' pauseOnClick={true} direction={'right'} speed={150} style={{
                    backgroundColor: "#0D68A1",
                    color: "#FFF",
                    margin: "30px 0",
                    animation: ".8s alternate infinite ease-in",
                    border: "5px solid #F4981D",
                    fontSize: "20px"
                }} >
                        <Typography style={{ margin: "0 10px", cursor: "pointer" }} sx={{ "&.css-225ngu-MuiTypography-root:hover" : {
                            color: "#000"
                        } }} >I can be a React component, multiple React components, or just some text <span style={{ fontSize:"25px", color:"#F4981D", fontWeight: "bold"  }} >/.</span> </Typography>
                        <Typography style={{ margin: "0 10px", cursor: "pointer" }} sx={{ "&.css-225ngu-MuiTypography-root:hover" : {
                            color: "#000"
                        } }} >I can be a React component, multiple React components, or just some text <span style={{ fontSize:"25px", color:"#F4981D", fontWeight: "bold"  }} >/.</span> </Typography>
                        <Typography style={{ margin: "0 10px", cursor: "pointer" }} sx={{ "&.css-225ngu-MuiTypography-root:hover" : {
                            color: "#000"
                        } }} >I can be a React component, multiple React components, or just some text <span style={{ fontSize:"25px", color:"#F4981D", fontWeight: "bold"  }} >/.</span> </Typography>
                </Marquee>
            </Box>
        </>
    )
}

export default HeadBot