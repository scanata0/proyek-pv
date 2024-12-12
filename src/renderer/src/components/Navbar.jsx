import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
   return(
      <AppBar position="fixed" sx={{ backgroundColor: '#00b140' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Tokotokoan
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Shop</Button>
          <Button color="inherit">Categories</Button>
          <Button color="inherit">Deals</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search products, brands, or categories"
            sx={{ backgroundColor: 'white', borderRadius: 1 }}
          />
          <IconButton color="inherit" sx={{ marginLeft: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
   )
}