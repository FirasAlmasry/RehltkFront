import React from "react";
import Carousel from "react-material-ui-carousel";

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
                    src="images/Artboard-1-15.png"
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
                    src="images/Artboard-1-1-1.png"
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
        </>
    );
}

export default Header;
