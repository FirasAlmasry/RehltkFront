import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material';

function SimpleAccordion() {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: "15px" }} >
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>اليوم الأول :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            الاستقبال من المطار بسيارة خاصة حديثة ومكيفة ومن ثم التوصيل الى فندق سالنجور ومساعدة الضيوف في ادخال
            الشنط واستالم مفاتيح الغرف والصعود للراحة

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            اليوم الثاني :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            يوم سياحي كامل يبدا من الساعة 10 صباحا في مدينة الصنواي الغون والتي تعتبر اكبر مدينة العاب مائية  على مستوى شرق أسيا ويتم
            الذهاب للتمتع بالالعاب المائيةوركوب الامواج والجسر المعلق الذي يمتد على كامل مدينة الصنواي ومن بعدها ركوب الدراجات للصعود الى الجبال وسباق السيارات والتمتع ببحيرة وشلال الصنواي ومن بعدها التوجه الى عالم األشباح
            وحديقة الحيوانات المصغرة وركوب القطارو من ثم التوجهٕ ال مول صنواي لاغون ويعتبر افضل المولات الذي يحتوي علي المحلات
            التجارية لبيع الماركات العالمية والمطاعم العربية
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            اليوم الثالث :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            بعد تناول وجبة الافطار المدفوعة مسبقا في الفندق سيتم التوصيل من الفندق الى المطار ومن ثم االستقبال في المطار و
            التوصيل الى فندق جزيرة بينانج بواسطه سياره خاصه

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            اليوم الرابع :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            التوجه الى مرتفعات هضبة بينانج لمشاهدة اطلالة المدينة وجسر بينانج وجسر أقفال الحب
            والبيوت الانجليزية القديمة ومن ثم الى حديقةالزهور والشالالات  ومصانع الشوكولاتة والقهوة الماليزية الشهيرة ومصنع الشاي و الاقمشة
            التقليدية ثم الي البيت المقلوب والعجائب لأخذ الصور الجميلة ومن ثم إلى حديقة الفراشات و االلعاب البحرية البراشوت والجيتسكي ومن
            ثم العودة في الساعة السادسة الى الفندق

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>اليوم الخامس :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            التوصيل الى المطار للسفر الى العاصمة كوالامبور  بالطائرة والاستقبال من مطار كولامبور والتوصيل الى الفندق
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            اليوم السادس :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            يوم سياحي كامل يبدأ من الساعة 10 صباحا ويتم التوجه الي منارة كولامبور التي يبلغ ارتفاعها 475 متر و الدخول الى المربع الزجاجي
            البرجين والصعود الى الاعلى لالتقاط صور الاطلالة المطلة علي كامل مدينةكولامبور المكشوف لألتقاط الصور ومن ثم التوجه الى
            إلى عالم ما تحت البحار الذي يضم جميع انواع أسماك العالم ومن ثم التوجه الي  حديقة الطيور وصالة الاستقلال  لالتقاط
            الصور أمام المباني البريطانية القديمة ومن ثم العودة في تمام الساعة السادسة الى الفندق

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            اليوم السابع :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            في الساعة العاشرة صباحا التوجه إلى مرتفعات جينتانج هايالند والصعود بالتل فريك واالستمتاع
            بالطبيعة الخالبة ومن ثم التوجه الى مدينة األلعاب الكهربائية ومن ثم المول وفي الساعة السادسة العودة الي الفندق

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            اليوم الثامن :
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            التوصيل من الفندق الي المطار للعودة الي ارض الوطن بسلامة لله
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
export default SimpleAccordion;