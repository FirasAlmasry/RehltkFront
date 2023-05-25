import { CardMedia, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./SotialIcon.css"
function SotialIcon() {
    return (
        <Stack direction="row" gap={3} justifyContent={"center"} margin={"0 1%"}>
            <Link
                to="https://www.facebook.com/profile.php?id=100091383402355&mibextid=ZbWKwL"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="45px"
                image="images/Facebook.png"
                alt="green iguana"
            />
            </Link>
            <Link
                to="https://www.instagram.com/reheltkksa/#"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="45px"
                image="images/Instagram.svg"
                alt="green iguana"
            />
            </Link>
            <Link
                to="https://www.snapchat.com/add/reheltkksa?share_id=T2KhijA3B9c&locale=ar-AE"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="45px"
                image="images/Snapchat_icon.webp"
                alt="green iguana"
            />
            </Link>
            <Link
                to="http://tiktok.com/@reheltkksa"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <CardMedia
                component="img"
                height="50px"
                image="images/TikTok.png"
                alt="green iguana"
            />
            </Link>
        </Stack>
    )
}

export default SotialIcon