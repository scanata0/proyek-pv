import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import DataContext from '../context/DataContext';

export default function BuyNow() {
   const [jumlah, setJumlah] = useState(1)

   const context = useContext(DataContext)
   const user = context.userActive

   const location = useLocation()
   const produk = location.state

   return(
      <>
         <Container sx={{minHeight: '700px'}}>
         <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
            <Grid2 container spacing={4}>
            <Grid2 xs={12} md={6}>
               <Card variant="outlined">
                  <CardMedia
                  component="img"
                  alt="Produk"
                  height="400"
                  image={produk.gambar}
                  sx={{ objectFit: 'contain' }}
                  />
               </Card>
            </Grid2>

            <Grid2 xs={12} md={6}>
               <Card variant="outlined" sx={{ padding: 3 }}>
                  <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                     {produk.nama}
                  </Typography>
                  <Typography color="textSecondary" sx={{ marginBottom: 2 }}>
                     Kategori: {produk.kategori}
                  </Typography>
                  <Typography color="textSecondary" sx={{ marginBottom: 2 }}>
                     Deskripsi: <br /> {produk.deskripsi}
                  </Typography>

                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                     Rp {(produk.harga).toLocaleString('ID-id')}
                  </Typography>

                  <Typography variant="body1" sx={{ marginBottom: 2 }}>
                     Jumlah:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                     <Button
                        variant="outlined"
                        onClick={() => setJumlah(jumlah - 1)}
                        disabled={jumlah <= 1}
                        sx={{ padding: '6px 12px' }}
                     >
                        <RemoveIcon />
                     </Button>
                     <Typography variant="body1">{jumlah}</Typography>
                     <Button
                        variant="outlined"
                        onClick={() => setJumlah(jumlah + 1)}
                        sx={{ padding: '6px 12px' }}
                     >
                        <AddIcon />
                     </Button>
                  </Box>

                  <Typography variant="body1" sx={{ marginBottom: 2, marginTop: 2 }}>
                     <strong>Total: Rp {((produk.harga)* jumlah).toLocaleString('ID-id')}</strong>
                  </Typography>

                  <Divider sx={{ marginY: 2 }} />

                  <Button variant="contained" fullWidth sx={{ padding: 1.5, backgroundColor: '#00b140' }}>
                     Beli Sekarang
                  </Button>
                  </CardContent>
               </Card>
            </Grid2>
            </Grid2>
         </Container>
         </Container>
      </>
   )
}