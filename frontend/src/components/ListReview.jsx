import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ListReview() {
    return (
        <>
            <Carousel
            style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)" }}
                height={450}
                sx={{
                    marginTop:"25px",
                    width: {md:"800px",xs:"100%"},
                    margin: "auto"
                }}>
                    
                 <img
                fetchpriority="high"
                    src="images/rev/01.jpg"
                    alt=""
                    style={{
                        height: 450,
                        borderRadius:"20px",
                        width: "100%",
                        objectFit: "fill",
                        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"

                    }}
                />
                 <img
                fetchpriority="high"
                    src="images/rev/02.jpg"
                    alt=""
                    style={{
                        height: 450,
                        borderRadius:"20px",
                        width: "100%",
                        objectFit: "fill",
                        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"

                    }}
                />
                 <img
                fetchpriority="high"
                    src="images/rev/03.png"
                    alt=""
                    style={{
                        height: 450,
                        borderRadius:"20px",
                        width: "100%",
                        objectFit: "fill",
                        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)"

                    }}
                />
            </Carousel>
        </>
    )
}

export default ListReview