import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Collapse, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard() {
    const navigate = useNavigate();
    return (
        <Stack direction="row" gap={5} flexWrap={'wrap'} justifyContent={"center"}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: '35%' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image="images/رحلتك.jpg"
                        />
                        <CardContent sx={{ padding: "0 16px" }} >
                            <Typography gutterBottom variant="h5" component="div">
                                * أفضل الاماكن السياحية في برشلونة...
                            </Typography>
                            <Typography gutterBottom variant="p" component="p">
                                تعتبر مدينة برشلونة هي الوجهة الأكثر شعبية في اسبانيا بسبب ماتتمتع به من مقومات سياحية كثيرة ومناظر خلابة تجذب الزوار اليها وسنقوم فيما يلي بعرض لافضل الاماكن السياحية التي يمكن زيارتها.
                                - " حديقة جويل" :-
                                - تحفة معمارية من تصميم المهندس المعماري الكاتالوني " انتوني غاودي " وتعتبر من اجمل الاماكن السياحية في برشلونة ويحتوي مجموعة من الحدائق وينصح بزيارته علي وجه الخصوص ويمكن ان تبدأ نهارك فيه بجولة في ارجاء الحديقة والاستمتاع بمساحتها الخضراء والمنحوتات ذات الطراز الفريد وتيتح الحديقة مناظر بانورامية تفوق الجمال الدخول هناك مجانيا ويوجد ايضا مقاهي ومطعم ومتجر للهدايا وحمامات
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "space-between", padding:"0 8px" }}>
                            <Button size="small" sx={{ color: "#1473E6" }} onClick={() => navigate(`/blog/barshlona`)}>قراءة المزيد</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: '35%' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image="images/اوربا.jpg"
                        />
                        <CardContent sx={{ padding: "0 16px" }} >
                            <Typography gutterBottom variant="h5" component="div">
                                * اجمل الدول السياحية في شرق اوربا...
                            </Typography>
                            <Typography gutterBottom variant="p" component="p">- لجأت بعض الجهات المسئولة في تصنيف دول شرق اوربا الي العديد من العوامل الجغرافية الطبيعة واعتمدت جهات اخري علي العوامل السياسية او الاختلاقات الثقافية او الدينية او التاريخية ولا يوجد تصنيف محدد وواضح ومتفق عليه.
                                - ولكن عرفت بانها الدول التي يحدها بحر البلطيق وبارنتس في الشمال وبحر الاسود وبحر قزوين في الحنوب ويشير مصطلح دول شرق اوربا الي الدول الاوربية التي كانت تحكمها الانظمة الشيوعية وتوصل احصاء الامم المتحدة الي مجموعة من الدول التابعة لشرق اوربا " التشيك ، البوسنة والهرسك، اوكرانيا، بيلاروسيا ، بلغاريا ، رومانيا ،مولدوفا"
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "space-between", padding:"0 8px" }}>
                            <Button size="small" sx={{ color: "#1473E6" }} onClick={() => navigate(`/blog/aoruba`)}>قراءة المزيد</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: '35%' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image="images/ماهو الكروز البحري.jpg"
                        />
                        <CardContent sx={{ padding: "0 16px" }} >
                            <Typography gutterBottom variant="h5" component="div">
                                * ماهو الكروز البحري :-

                            </Typography>
                            <Typography gutterBottom variant="p" component="p">
                                - اصبح الابحار جزء رئيسي في مجال السياحة وبناء علي ذلك شهدت الموانئ للصناعات الحديثة عدد من سفن الكروز السياحي وتم بناؤها حديثا لتلبية احتياجات العملاء.
                                وتستخدم سفن الكروز الضخمة العملاقة في الرحلات البحرية السياحية ورحلات المتعة والترفيه السياحي وتكون الرحلة نفسها ووسائل الراحة الخاصة جزء من التجربة.
                                وتمتد هذه الرحلات الي 3 ليال او اكثر وممكن ان تستمر الي اسابيع وتمر بالركاب في موانئ مختلفة ولديها قدرات مختلفة لتخزين الوقود والطعام .
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "space-between", padding:"0 8px" }}>
                            <Button size="small" sx={{ color: "#1473E6" }} onClick={() => navigate(`/blog/bhre`)}>قراءة المزيد</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card sx={{ minWidth: '35%' }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="300"
                            image="images/موستار.jpg"
                        />
                        <CardContent sx={{ padding: "0 16px" }} >
                            <Typography gutterBottom variant="h5" component="div">
                                ** السياحة في موستار

                            </Typography>
                            <Typography gutterBottom variant="p" component="p">
                                - موستار مدينة ساحرة تقع بالقرب من دوبرفينك تشتهر في جميع انحاء العالم بسحرها الرائع ومناظرها الخلابة وتعتبر واحدة من اكثر الوجهات السياحية التي يمكن للسياح الوصول اليها ويوجد بها العديد من الأماكن السياحية الساحرة واشتهرت بسبب جسرها الذي دمر خلال الحرب الأهلية.
                                - اين تقع موستار :-
                                هي عاصمة البوسنة والهرسك وخامس أكبر مدينة في البلاد وتقع علي بلد جبلي ويوجد بها جسر موستار " الجسر القديم " الذي كان سبب في شهرتها.

                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: "flex", justifyContent: "space-between", padding:"0 8px" }}>
                            <Button size="small" sx={{ color: "#1473E6" }} onClick={() => navigate(`/blog/mostar`)}>قراءة المزيد</Button>
                        </CardActions>
                        
                    </Card>
                </Grid>
            </Grid>
        </Stack>

    );
}