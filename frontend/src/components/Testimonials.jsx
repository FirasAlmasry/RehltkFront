import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import "./Testimonials.css"
import React from "react";

function Testimonials() {
    return (
        <>
            <Stack 
                direction="row" 
                gap={3} 
                flexDirection={"column"} 
                alignItems={"center"} 
                justifyContent={"center"} 
                textAlign={"center"}  
                className="cardTestim" >
                <Avatar sx={{ 
                    width: 60, 
                    height: 60, 
                    position:"absolute", 
                    top:"-10%" }}
                     style={{filter: "dropShadow(0px 4px 15px rgba(0, 0, 0, 0.25))" }} />
                <Stack>
                    <Typography gutterBottom variant="h5" component="h5">
                        محمد خالد
                    </Typography>
                    <Typography gutterBottom variant="p" component="p">
                        عميل سابق
                    </Typography>
                    <hr style={{ width:"100%", margin:" 20px 0" }} className="circle" />
                    {/* <Rating name="read-only" value={5} readOnly /> */}
                    <Typography gutterBottom variant="h6" component="h5">
                    تعاملهم جدا رائع وسريعين فالخدمه كانت من اجمل السفرات اللي سفرتها مهتمين فالعميل بادق التفاصيل اشكركم.
                    </Typography>
                </Stack>
            </Stack>
        </>
    );
}

export default Testimonials;
