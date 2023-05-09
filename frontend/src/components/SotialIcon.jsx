// import { Facebook, Instagram, Twitter, Google } from '@mui/icons-material'
import { CardMedia, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./SotialIcon.css"
// import google from '../../public/images/Google G.svg'
function SotialIcon() {
    return (
        <Stack direction="row" gap={3} justifyContent={"center"} margin={"0 1%"}>
            <Link
                to="#"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="40px"
                image="images/Facebook.png"
                alt="green iguana"
            />
                {/* <Facebook sx={{ width:"100%", height:"100%" }} /> */}
            </Link>
            <Link
                to="#"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="40px"
                image="images/Instagram.svg"
                alt="green iguana"
            />
                {/* <Instagram sx={{ width:"100%", height:"100%" }} /> */}
            </Link>
            <Link
                to="#"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="40px"
                image="images/Twitter.svg"
                alt="green iguana"
            />
                {/* <Twitter sx={{ width:"100%", height:"100%" }}  /> */}
            </Link>
            <Link
                to="#"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="40px"
                image="images/Google G.svg"
                alt="green iguana"
            />
                {/* <Google sx={{ width:"100%", height:"100%" }}  className='google'/> */}
            </Link>
        </Stack>
    )
}

export default SotialIcon