import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AccountCircleSharp, HandymanSharp, SchoolSharp, WorkSharp} from '@mui/icons-material';
import { Grid } from '@mui/material';


function renderGrid(children, cols) {
    const colWidth = 12 / cols
    return(
        <Grid container spacing={6}>
            {Array.from(children).map((child, index) => (
                <Grid item md={colWidth} key={index}>
                    {child}
                </Grid>
            ))}
        </Grid>
    )
}

export default function Section(props){
    return(
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >       
        {props.title === 'Contact' ? (
            <AccountCircleSharp/>
        ):<></>
        }
        {props.title === 'Education' ? (
            <SchoolSharp/>
        ):<></>
        }
        {props.title === 'Experience' ? (
            <WorkSharp/>
        ):<></>
        }
        {props.title === 'Projects' ? (
            <HandymanSharp/>
        ):<></>
        }
          &nbsp;
          &nbsp;
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {props.children?(renderGrid(props.children,props.cols)):<></>}
        </AccordionDetails>
      </Accordion>
    )
}