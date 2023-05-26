import { Grid } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'

function ListReview() {
    return (
        <>
            <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
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
            </Grid>
            <Grid item xs={12} md={4}>
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
            </Grid>
            <Grid item xs={12} md={4}>
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
            </Grid>
            </Grid>
            
                 
            {/* </Carousel> */}
        </>
    )
}

export default ListReview