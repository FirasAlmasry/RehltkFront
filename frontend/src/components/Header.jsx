import React from "react";
import Carousel from "react-material-ui-carousel";
import HeadBot from "./HeadBot";
import { CardMedia } from "@mui/material";

function Header() {
    return (
        <>
            <Carousel
                
                sx={{
                    width: "90%",
                    marginRight:"5%"
                }}
            >
                <CardMedia
                            component="img"
                            alt="green iguana"
                    src="images/بانر/Azerbaijanموقع.jpg"
                    style={{
                        
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <CardMedia
                            component="img"
                            alt="green iguana"
                    src="images/بانر/اندونيسيا موقع2.jpg"
                    style={{
                        
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <CardMedia
                            component="img"
                            alt="green iguana"
                    src="images/بانر/تايلاند موقع.jpg"
                    style={{
                        
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <CardMedia
                            component="img"
                            alt="green iguana"
                    src="images/بانر/تركيا موقع.jpg"
                    style={{
                        
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <CardMedia
                            component="img"
                            alt="green iguana"
                    src="images/بانر/جورجيا موقع.jpg"
                    style={{
                        
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <CardMedia
                            component="img"
                            alt="green iguana"
                    src="images/بانر/ماليزيا موقع2 .jpg"
                    style={{
                        
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                
            </Carousel>
            <HeadBot />
        </>
    );
}

export default Header;
