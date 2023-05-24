import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Link } from 'react-router-dom';
export default function IconAvatars() {
    return (
        <Stack direction="column" spacing={2} position="fixed" sx={{
            zIndex: "9999",
            left: "20px",
            top: 'auto',
            bottom: 4
        }}>
            <Link
                to="https://wa.me/966510608385?text="
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <Avatar sx={{ width: "50px", height: "50px", backgroundColor: "#25D366" }} >
                    <WhatsAppIcon />
                </Avatar>
            </Link>
            <Link
                to="tel:+966510608385"
                style={{
                    color: "inherit",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: "bold",
                }}
            >
                <Avatar sx={{ width: "50px", height: "50px", backgroundColor: "green" }} >
                    <LocalPhoneIcon />
                </Avatar>
            </Link>
        </Stack>
    );
}