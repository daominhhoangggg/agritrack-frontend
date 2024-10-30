import { Box, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor tellus venenatis ultricies semper. Nulla ut sapien quis
            lectus mollis viverra id vitae arcu. Duis eget malesuada quam. Sed
            et nibh at sem laoreet pulvinar. Sed eget tincidunt urna. Donec
            tempus non sapien id congue. Sed lorem ipsum, tincidunt pellentesque
            tincidunt id, ultrices aliquet lacus. Vivamus at tristique turpis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor tellus venenatis ultricies semper. Nulla ut sapien quis
            lectus mollis viverra id vitae arcu. Duis eget malesuada quam. Sed
            et nibh at sem laoreet pulvinar. Sed eget tincidunt urna. Donec
            tempus non sapien id congue. Sed lorem ipsum, tincidunt pellentesque
            tincidunt id, ultrices aliquet lacus. Vivamus at tristique turpis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favourite question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor tellus venenatis ultricies semper. Nulla ut sapien quis
            lectus mollis viverra id vitae arcu. Duis eget malesuada quam. Sed
            et nibh at sem laoreet pulvinar. Sed eget tincidunt urna. Donec
            tempus non sapien id congue. Sed lorem ipsum, tincidunt pellentesque
            tincidunt id, ultrices aliquet lacus. Vivamus at tristique turpis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor tellus venenatis ultricies semper. Nulla ut sapien quis
            lectus mollis viverra id vitae arcu. Duis eget malesuada quam. Sed
            et nibh at sem laoreet pulvinar. Sed eget tincidunt urna. Donec
            tempus non sapien id congue. Sed lorem ipsum, tincidunt pellentesque
            tincidunt id, ultrices aliquet lacus. Vivamus at tristique turpis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor tellus venenatis ultricies semper. Nulla ut sapien quis
            lectus mollis viverra id vitae arcu. Duis eget malesuada quam. Sed
            et nibh at sem laoreet pulvinar. Sed eget tincidunt urna. Donec
            tempus non sapien id congue. Sed lorem ipsum, tincidunt pellentesque
            tincidunt id, ultrices aliquet lacus. Vivamus at tristique turpis.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor tellus venenatis ultricies semper. Nulla ut sapien quis
            lectus mollis viverra id vitae arcu. Duis eget malesuada quam. Sed
            et nibh at sem laoreet pulvinar. Sed eget tincidunt urna. Donec
            tempus non sapien id congue. Sed lorem ipsum, tincidunt pellentesque
            tincidunt id, ultrices aliquet lacus. Vivamus at tristique turpis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
