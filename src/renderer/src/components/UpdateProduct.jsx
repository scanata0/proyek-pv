import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia } from '@mui/material';

import DataContext from '../context/DataContext';

export default function UpdateProduct() {
   const [inpNama, setInpNama] = useState('')
   const [inpKategori, setInpKategori] = useState('')
   const [inpDesc, setInpDesc] = useState('')
   const [inpGbr, setInpGbr] = useState('')
   const [inpHarga, setInpHarga] = useState(0)
   const [inpStok, setInpStok] = useState(1)

   const location = useLocation()
   const produk = location.state

   useEffect(() => {
      if(produk) {
         setInpNama(produk.nama)
         setInpKategori(produk.kategori)
         setInpDesc(produk.deskripsi)
         setInpGbr(produk.gambar)
         setInpHarga(produk.harga)
         setInpStok(produk.stok)
      }
   }, [])

   const context = useContext(DataContext)

   return(
      <>
         <Container sx={{minHeight: '680px', marginTop: '100px'}}>
            <Typography variant="h5">{produk ? 'Edit Produk' : 'Tambah Produk Baru'}</Typography>
            
            <Box
               component="form"
               // onSubmit={handleSubmit}
               sx={{
               mt: 1,
               width: '100%',
               }}
            >
               <TextField
               label="Nama Produk"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpNama}
               onChange={(e) => setInpNama(e.target.value)}
               />
               <TextField
               label="Kategori"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpKategori}
               onChange={(e) => setInpKategori(e.target.value)}
               />
               <TextField
               label="Deskripsi Produk"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpDesc}
               onChange={(e) => setInpDesc(e.target.value)}
               />
               <TextField
               label="Link Gambar"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpGbr}
               onChange={(e) => setInpGbr(e.target.value)}
               />
               <TextField
               label="Harga Produk"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpHarga}
               onChange={(e) => setInpHarga(e.target.value)}
               />
               <TextField
               label="Stok"
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpStok}
               onChange={(e) => setInpStok(e.target.value)}
               />
   
               <Button
               type="submit"
               fullWidth
               variant="contained"
               sx={{
                  backgroundColor: '#00b94e',
                  '&:hover': { backgroundColor: '#009e3f' },
                  mt: 2,
                  padding: '10px',
               }}
               >
               {produk ? 'Edit' : 'Tambah'}
               </Button>
            </Box>
         </Container>
      </>
   )
}