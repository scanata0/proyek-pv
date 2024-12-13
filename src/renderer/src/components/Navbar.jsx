import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, TextField, IconButton } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';

export default function Navbar() {
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return(
      <AppBar position="fixed" sx={{ backgroundColor: '#00b140' }}>
      <Toolbar>
         <Box sx={{display: 'flex', gap: 3, flexGrow: 1}}>
        <Typography variant="h6">
          Tokotokoan
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2, marginLeft: 2 }}>
          <Button color="inherit">Home</Button>
          <div>
            <Button
            id="basic-button"
            color='inherit'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            Kategori
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
            >
            <MenuItem onClick={handleClose}>Elektronik</MenuItem>
            <MenuItem onClick={handleClose}>Fashion</MenuItem>
            <MenuItem onClick={handleClose}>Kecantikan</MenuItem>
            <MenuItem onClick={handleClose}>Kesehatan</MenuItem>
            <MenuItem onClick={handleClose}>Makanan & Minuman</MenuItem>
            </Menu>
         </div>
          <Button color="inherit">Deals</Button>
        </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 2, flexGrow: 1 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search products, brands, or categories"
            sx={{ backgroundColor: 'white', borderRadius: 1, width: '700px' }}
          />
          <IconButton color="inherit" sx={{ marginLeft: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flexGrow: 1, justifyContent: 'end' }}>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Log In</Button>
        </Box>
      </Toolbar>
    </AppBar>
   )
}