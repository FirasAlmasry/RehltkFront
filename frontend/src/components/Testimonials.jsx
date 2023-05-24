import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import "./Testimonials.css"
import React from "react";

function Testimonials({name,state,desc}) {
    return (
        <>
            <Stack 
                direction="row" 
                gap={3} 
                flexDirection={"column"} 
                alignItems={"center"} 
                justifyContent={"center"} 
                textAlign={"center"}  
                // height={300}
                className="cardTestim" >
                <Stack>
                    <Typography gutterBottom variant="h5" component="h5">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                         {state}
                    </Typography>
                    <hr style={{ width:"100%", margin:" 20px 0" }} className="circle" />
                    {/* <Rating name="read-only" value={5} readOnly /> */}
                    <Typography gutterBottom variant="h6" component="h5">
                    {desc}
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Testimonials;
