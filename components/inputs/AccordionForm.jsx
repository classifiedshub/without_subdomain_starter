import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const AccordionForm = ({ data }) => {
  return (
    <Accordion
    // allowMultiple
    >
      {data.map((integration, i) => (
        <AccordionItem key={i}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {integration.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{integration.form}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionForm;
