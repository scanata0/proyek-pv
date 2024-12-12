import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

export default function Footer() {
   return(
      <Box position='fixed' sx={{ backgroundColor: '#f5f5f5', padding: 2, position: 'absolute', bottom: '0', width: '100%'}}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 Tokotokoan. All Rights Reserved.
        </Typography>
        <Box sx={{ marginTop: 1 }}>
          <Link href="#" sx={{ marginRight: 2 }}>Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </Box>
      </Container>
    </Box>
   )
}