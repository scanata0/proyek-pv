import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, Modal, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { AuthContext } from '../context/Auth';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function UserCart() {
   const {arrProducts, userActive} = useContext(AuthContext)
   const [isiKeranjang, setIsiKeranjang] = useState([])

   useEffect(() => {
      setIsiKeranjang([])
      for (let i = 0; i < arrProducts.length; i++) {
         for (let j = 0; j < (userActive.keranjang).length; j++) {
            if(arrProducts[i].idProduk == (userActive.keranjang[j]).idProduk){
               setIsiKeranjang([...isiKeranjang, {
                  produk: arrProducts[i],
                  jumlah: (userActive.keranjang[j]).jumlah
               }])
            }
         }
      }
   }, [])

   return (
      <>
         <Container sx={{minHeight: '700px'}}>
            <Box style={{ padding: '20px' }}>
               <Typography variant="h4" gutterBottom>Keranjang Anda</Typography>

               {/* Grid untuk menampilkan produk dalam keranjang secara vertikal */}
               <Stack spacing={2}>
               {isiKeranjang.map((a, index) => (
                  <Box key={index}>
                     <Card sx={{ display: 'flex', flexDirection: 'row', boxShadow: 3 }}>
                     <CardMedia
                        component="img"
                        sx={{ width: 150, height: 150, objectFit: 'cover' }}
                        image={a.produk.gambar}
                        alt={a.produk.nama}
                     />
                     <Box sx={{display: 'flex', width: '100%'}}>
                        <Box sx={{ p: 2 }}>
                           <Typography variant="h6">{a.produk.nama}</Typography>
                           <Typography variant="body2" color="textSecondary" gutterBottom>
                              Rp {(a.produk.harga).toLocaleString('ID-id')}
                           </Typography>
                           <Typography variant="body2" color="textSecondary" gutterBottom>
                              x{a.jumlah}
                           </Typography>
                           </Box>
                           <Box sx={{p: 2, marginLeft: 'auto'}}>
                              <Box>
                                 <Checkbox sx={{float: 'right'}} {...label} />
                              </Box>
                              <Button
                                 variant="contained"
                                 color="error"
                                 // onClick={() => removeFromCart(item.id)}
                              >
                                 Delete
                              </Button>
                           </Box>
                     </Box>
                     </Card>
                  </Box>
               ))}
               </Stack>

               <Divider sx={{ my: 2 }} />

               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 2 }}>
               <Typography variant="h6">Total: Rp 5</Typography>
               <Button variant="contained" sx={{ padding: 1.5, backgroundColor: '#00b140' }}>Checkout</Button>
               </Box>
            </Box>
         </Container>
      </>
   )
}