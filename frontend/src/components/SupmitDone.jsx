import { Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function SupmitDone() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 4000)
    }, [])
    return (
        <>
            <Typography sx={{
                margin:{md:"15px", xs : "5px"},
                height: "85vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "#0D68A2",
                textAlign: "center",
                fontSize: "2rem",
                width: "100vw"
            }} >
                شكرا لك .. <br/> تم ارسال طلبك بنجاح .. <br/> وسوف نقوم بالتواصل معك في اسرع وقت
            </Typography>
        </>
    )
}

export default SupmitDone