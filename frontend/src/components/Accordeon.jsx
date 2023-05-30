import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { useGetToursIdQuery } from '../state/apiTours';
import { useEffect } from 'react';

function SimpleAccordion() {
  const [tourData, setTourData] = useState([]);
  let { id } = useParams()
  const { data, isLoading } = useGetToursIdQuery(id);
  useEffect(() => {
    if (data) {
      setTourData(data.data)
    }
  }, [data])

  const theme = useTheme();

  return (
    <div style={{ marginBottom: "15px" }} >
      {
        tourData?.days?.map((day) =>
          <Accordion style={{ backgroundColor: ` #FFF`, color: "#000", margin: "0" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{day.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {day.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      }

    </div>
  );
}
export default SimpleAccordion;