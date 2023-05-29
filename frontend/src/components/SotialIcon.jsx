import { CardMedia, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./SotialIcon.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
function SotialIcon() {
    return (
        <Stack direction="row" 
        gap={3} 
        justifyContent={"center"} 
        margin={"0 1%"} 
        flexWrap={{ md:"nowrap", xs: "wrap"  }} >
            <Link
                to="https://www.facebook.com/profile.php?id=100091383402355&mibextid=ZbWKwL"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                {/* <FacebookIcon sx={{     width: "100%",
    height: "46px",
    color: "blue" }} /> */}
                {/* <CardMedia
                component="img"
                
                image="images/Facebook.png"
                alt="green iguana"
            /> */}
            <img alt="test" src="images/Facebook.png" width="60px" hight="60px" />
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
                {/* <InstagramIcon sx={{width: "100%",
    height: "46px",
    color: "blue"}}/> */}
                {/* <CardMedia
                component="img"
                
                image="images/Instagram.svg"
                alt="green iguana"
            /> */}
            <img alt="test" src="images/Instagram.svg" width="60px" hight="60px" />
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
                {/* <CardMedia
                component="img"
                
                image="images/Snapchat_icon.webp"
                alt="green iguana"
            /> */}
            <img alt="test" src="images/Snapchat_icon.webp" width="60px" hight="60px" />
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
                {/* <CardMedia
                component="img"
                height="50px"
                image="images/TikTok.png"
                alt="green iguana"
            /> */}
            <img alt="test" src="images/TikTok.png" width="60px" hight="60px" />
            </Link>
        </Stack>
    )
}

export default SotialIcon