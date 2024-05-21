import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const studentFaqs = [
  {
    question: "Öğretmen nasıl bulunur?",
    answer: "Öğretmen bulmak için üst menüdeki 'Öğretmen Bulmak' seçeneğini kullanabilirsiniz."
  },
  {
    question: "Bir öğretmenle nasıl iletişime geçilir?",
    answer: "Bir öğretmenle iletişime geçmek için öğretmenin profiline gidip 'İletişime Geç' butonuna tıklayabilirsiniz."
  },
  {
    question: "Talep gönderildikten sonra ne olur?",
    answer: "Talebiniz gönderildikten sonra öğretmen sizinle iletişime geçecektir."
  }
];

const teacherFaqs = [
  {
    question: "Öğrenci nasıl bulunur?",
    answer: "Öğrenci bulmak için üst menüdeki 'Öğrenci Bulmak' seçeneğini kullanabilirsiniz."
  },
  {
    question: "Bir öğrenciyle nasıl iletişime geçilir?",
    answer: "Bir öğrenciyle iletişime geçmek için öğrencinin profiline gidip 'İletişime Geç' butonuna tıklayabilirsiniz."
  },
  {
    question: "Talep gönderildikten sonra ne olur?",
    answer: "Talebiniz gönderildikten sonra öğrenci sizinle iletişime geçecektir."
  }
];

function FAQ() {
  const [alignment, setAlignment] = useState('student');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const faqs = alignment === 'student' ? studentFaqs : teacherFaqs;

  return (
    <div style={{ width: '80%', margin: '0 auto', marginTop: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton
            value="student"
            aria-label="left aligned"
            sx={{
              marginTop: '200px',
              marginBottom: '50px',
              borderRadius: '8px',
              width: '300px',
            }}
          >
            Öğrenciler
          </ToggleButton>
          <ToggleButton
            value="teacher"
            aria-label="centered"
            sx={{
              marginTop: '200px',
              marginBottom: '50px',
              borderRadius: '8px',
              width: '300px',
            }}
          >
            Öğretmenler
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FAQ;
