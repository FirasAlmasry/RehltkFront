import { Box, Typography } from '@mui/material';
import React from 'react'
import Marquee from "react-fast-marquee";

function HeadBot() {
    return (
        <>
            <Box>
                <Marquee autoFill={true} pauseOnHover={true} behavior='scroll' pauseOnClick={true} direction={'right'} speed={200} style={{
                    backgroundColor: "#FFF",
                    color: "#000",
                    margin: "10px 0",
                    animation: ".8s alternate infinite ease-in",
                    border: "1px solid #0d659d",
                    fontSize: "20px",
                    
                }} >
                        <Typography style={{ margin: "0 5px", cursor: "pointer",fontSize:"26px" }} >حجز برامج سياحية .  / رخصة دولية .
/  حجز فنادق .
/ تأشيرات سياحية. 
/   حجز طيران. 
/ خطط لسفرتك بكل سهولة مع رحلتك للسفر والسياحة .
</Typography>
                        {/* <Typography style={{ margin: "0 5px", cursor: "pointer",fontSize:"26px" }} > . </Typography>
                        <Typography style={{ margin: "0 5px", cursor: "pointer",fontSize:"26px" }} > </Typography>
                        <Typography style={{ margin: "0 5px", cursor: "pointer",fontSize:"26px" }} > </Typography>
                        <Typography style={{ margin: "0 5px", cursor: "pointer",fontSize:"26px" }} ></Typography>
                        <Typography style={{ margin: "0 5px", cursor: "pointer",fontSize:"26px" }} ></Typography> */}
                       
                </Marquee>
            </Box>
        </>
    )
}

export default HeadBot