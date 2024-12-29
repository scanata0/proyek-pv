import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, Modal } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import DataContext from '../context/DataContext';

export default function BuySuccess() {
   const location = useLocation()
   const arrBeli = location.state

   return(
      <>
         <Container sx={{minHeight: '680px'}}>
            <Container maxWidth="lg" style={{ marginTop: '100px' }}>
         <Grid2 container spacing={3}>
         <Grid2 size={12}>
            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
               <CheckCircleIcon color="success" style={{ fontSize: 80 }} />
               <Typography variant="h5" style={{ marginTop: '10px' }}>
               Pembelian Berhasil!
               </Typography>
               <Typography variant="body1" color="textSecondary" style={{ marginTop: '10px' }}>
               Terima kasih telah berbelanja di Tokotokoan. Pesanan Anda sedang diproses.
               </Typography>
            </Paper>
         </Grid2>

         <Grid2 size={12}>
            <Paper style={{ padding: '20px' }}>
               <Typography variant="h6" gutterBottom>
               Detail Pesanan
               </Typography>
               <Box display="flex" flexDirection="column">
               <Box display="flex" sx={{justifyContent: 'space-between', marginTop: '20px'}}>
                  <Typography variant="body2">
                     <strong>Produk</strong>
                  </Typography>
                  <Typography variant="body2">
                     <strong>Jumlah</strong>
                  </Typography>
                  <Typography variant="body2">
                     <strong>Total Harga</strong>
                  </Typography>
               </Box>
               {arrBeli.map((a, index) => (
                  <Box key={index} display="flex" sx={{justifyContent: 'space-between', marginTop: '15px'}}>
                     <Typography variant="body2">
                        {a.produk.nama}
                     </Typography>
                     <Typography variant="body2">
                        {a.jumlah}
                     </Typography>
                     <Typography variant="body2">
                        Rp {((a.produk.harga)* a.jumlah).toLocaleString('ID-id')}
                     </Typography>
                  </Box>
               ))}
               </Box>
            </Paper>
         </Grid2>

         <Box sx={{marginX: 'auto'}}>
            <NavLink to='/home'><Button variant='contained' sx={{ padding: 1.5, backgroundColor: '#00b140' }}>Kembali ke Home</Button></NavLink>
         </Box>
         </Grid2>
      </Container>
         </Container>
      </>
   )
}