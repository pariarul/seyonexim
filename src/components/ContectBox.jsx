import React from 'react';
import { WhatsApp } from '@mui/icons-material';
import { IconButton, Box } from '@mui/material';

const ContactBox = () => {
  const whatsapp = "https://wa.me/1234567890";

  const iconGreen = '#047857';
  const backgroundWhite = '#ffffff';
  const hoverBg = '#d1fae5';

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: (theme) => theme.zIndex.tooltip,
      }}
    >
      <IconButton
        href={whatsapp}
        rel="noopener noreferrer"
        sx={{
          background: backgroundWhite,
          border: `1px solid ${iconGreen}`,
          color: iconGreen,
          width: 55,
          height: 55,
          borderRadius: '50%',
          '&:hover': {
            background: hoverBg,
            transform: 'scale(1.1)',
          },
          transition: 'all 0.3s ease',
        }}
        aria-label="Contact via WhatsApp"
      >
        <WhatsApp fontSize="medium" />
      </IconButton>
    </Box>
  );
};

export default ContactBox;
