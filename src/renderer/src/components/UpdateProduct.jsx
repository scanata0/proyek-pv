import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, FormControl, InputLabel, Select, MenuItem, InputAdornment, OutlinedInput } from '@mui/material';

import DataContext from '../context/DataContext';

export default function UpdateProduct() {
   const context = useContext(DataContext)
   const [products, setProducts] = useState(context.products)
   const [inpNama, setInpNama] = useState('')
   const [inpKategori, setInpKategori] = useState('')
   const [inpDesc, setInpDesc] = useState('')
   const [inpGbr, setInpGbr] = useState('')
   const [inpHarga, setInpHarga] = useState(0)
   const [inpStok, setInpStok] = useState(1)

   const location = useLocation()
   const produk = location.state
   const navigate = useNavigate()

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

   function handleSubmit() {
      if(produk) {
         const newProduk = {
            idProduk: produk.idProduk,
            idPenjual: produk.idPenjual,
            nama: inpNama,
            kategori: inpKategori,
            deskripsi: inpDesc,
            gambar: inpGbr,
            harga: inpHarga,
            stok: inpStok
         }

         const newProducts = products.map((p) => {
            if(produk.idProduk === p.idProduk) {
               return newProduk
            } else {
               return p
            }
         })
         setProducts(newProducts)
         context.editProduct(newProduk)
         window.api.saveProducts(newProducts)
      } else {
         const newProduk = {
            idProduk: products.length + 1,
            idPenjual: (context.userActive).id,
            nama: inpNama,
            kategori: inpKategori,
            deskripsi: inpDesc,
            gambar: inpGbr,
            harga: inpHarga,
            stok: inpStok
         }

         const newProducts = [...products, newProduk]
         setProducts(newProducts)
         context.addProduct(newProduk)
         window.api.saveProducts(newProducts)
      }
      navigate('/profile')
   }

   return(
      <>
         <Container sx={{minHeight: '680px', marginTop: '100px'}}>
            <Typography variant="h5">{produk ? 'Edit Produk' : 'Tambah Produk Baru'}</Typography>
            
            <Box
               component="form"
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
               <FormControl fullWidth margin='normal'>
                  <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
                  <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={inpKategori}
                     label="Kategori"
                     onChange={(e) => setInpKategori(e.target.value)}
                  >
                     <MenuItem value='Rumah Tangga'>Rumah Tangga</MenuItem>
                     <MenuItem value='Elektronik'>Elektronik</MenuItem>
                     <MenuItem value='Fashion'>Fashion</MenuItem>
                     <MenuItem value='Kecantikan'>Kecantikan</MenuItem>
                     <MenuItem value='Kesehatan'>Kesehatan</MenuItem>
                     <MenuItem value='Makanan & Minuman'>Makanan & Minuman</MenuItem>
                  </Select>
                  </FormControl>
               <TextField
               id="outlined-multiline-static"
               multiline
               label="Deskripsi Produk"
               fullWidth
               variant="outlined"
               margin="normal"
               rows={4}
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
               <FormControl fullWidth margin='normal'>
                  <InputLabel>Harga</InputLabel>
                  <OutlinedInput
                     startAdornment={<InputAdornment position="start">Rp</InputAdornment>}
                     label="Harga"
                     type='number'
                     required
                     value={inpHarga}
                     onChange={(e) => setInpHarga(e.target.value)}
                  />
               </FormControl>
               <TextField
               label="Stok"
               type='number'  
               fullWidth
               variant="outlined"
               margin="normal"
               required
               value={inpStok}
               onChange={(e) => setInpStok(e.target.value)}
               />
   
               <Button
               fullWidth
               variant="contained"
               sx={{
                  backgroundColor: '#00b94e',
                  '&:hover': { backgroundColor: '#009e3f' },
                  mt: 2,
                  padding: '10px',
               }}
               onClick={handleSubmit}
               >
               {produk ? 'Edit' : 'Tambah'}
               </Button>
            </Box>
         </Container>
      </>
   )
}