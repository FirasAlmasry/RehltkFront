import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function ImgMediaCard() {
    return (
        <Stack direction="row" gap={5} justifyContent={"center"}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="images/Rectangle.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="p">
                    نص إفتراضي . منذ 3 أيام
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    رحلة الى البوسنة
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى 
هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                    </Typography>
                </CardContent>
                <CardActions sx={{ display:"flex", justifyContent:"space-between" }}>
                    <Button size="small" sx={{ color:"#1473E6" }}>8 ألاف زيارة</Button>
                    <Button size="small" sx={{ color:"#1473E6" }}>قراءة المزيد</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="images/Rectangle.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="p">
                    نص إفتراضي . منذ 3 أيام
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    رحلة الى البوسنة
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى 
هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                    </Typography>
                </CardContent>
                <CardActions sx={{ display:"flex", justifyContent:"space-between" }}>
                    <Button size="small" sx={{ color:"#1473E6" }}>8 ألاف زيارة</Button>
                    <Button size="small" sx={{ color:"#1473E6" }}>قراءة المزيد</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="images/Rectangle.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="p" component="p">
                    نص إفتراضي . منذ 3 أيام
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                    رحلة الى البوسنة
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى 
هذا النص هو مثال لنص يمكن أن يستبدل في نفس
                    </Typography>
                </CardContent>
                <CardActions sx={{ display:"flex", justifyContent:"space-between" }}>
                    <Button size="small" sx={{ color:"#1473E6" }}>8 ألاف زيارة</Button>
                    <Button size="small" sx={{ color:"#1473E6" }}>قراءة المزيد</Button>
                </CardActions>
            </Card>
        </Stack>

    );
}