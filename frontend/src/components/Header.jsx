import React from "react";
import Carousel from "react-material-ui-carousel";
import HeadBot from "./HeadBot";

function Header() {
    return (
        <>
            <Carousel
                height={500}
                sx={{
                    width: "90%",
                    marginRight:"5%"
                }}
            >
                <img
                    src="images/بانر/Azerbaijanموقع.jpg"
                    alt=""
                    style={{
                        height: 500,
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <img
                    src="images/بانر/اندونيسيا موقع2.jpg"
                    alt=""
                    style={{
                        height: 500,
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <img
                    src="images/بانر/تايلاند موقع.jpg"
                    alt=""
                    style={{
                        height: 500,
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <img
                    src="images/بانر/تركيا موقع.jpg"
                    alt=""
                    style={{
                        height: 500,
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <img
                    src="images/بانر/جورجيا موقع.jpg"
                    alt=""
                    style={{
                        height: 500,
                        width: "100%",
                        objectFit: "fill",
                        borderBottomLeftRadius: "20px",
                        borderBottomRightRadius: "20px",
                    }}
                />
                <img
                    src="images/بانر/ماليزيا موقع2 .jpg"
                    alt=""
                    style={{
                        height: 500,
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
