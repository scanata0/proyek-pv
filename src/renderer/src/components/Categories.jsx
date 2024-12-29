import React, { useState, useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Grid2, Card, CardMedia, CardContent, Typography, CardActions, Modal, Box } from '@mui/material';

import DataContext from '../context/DataContext';

const styleModal = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
 };

export function RumahTangga() {
   const context = useContext(DataContext)
   const filteredProducts = (context.products).filter((p) => p.kategori === 'Rumah Tangga')

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Rumah Tangga</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>
      </Container>
    </>
  )
}

export function Elektronik() {
   const context = useContext(DataContext)
   const filteredProducts = (context.products).filter((p) => p.kategori === 'Elektronik')

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Elektronik</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>
      </Container>
    </>
  )
}

export function Fashion() {
   const context = useContext(DataContext)
   const filteredProducts = (context.products).filter((p) => p.kategori === 'Fashion')

  return (
    <>
      <Container sx={{minHeight: '370px'}}>
         <h1>Produk Fashion</h1>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>
      </Container>
    </>
  )
}

export function Kecantikan() {
   const context = useContext(DataContext)
   const filteredProducts = (context.products).filter((p) => p.kategori === 'Kecantikan')

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Kecantikan</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

 export function Kesehatan() {
   const context = useContext(DataContext)
   const filteredProducts = (context.products).filter((p) => p.kategori === 'Kesehatan')

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Kesehatan</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

 export function MakananMinuman() {
   const context = useContext(DataContext)
   const filteredProducts = (context.products).filter((p) => p.kategori === 'Makanan & Minuman')

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
          <h1>Produk Makanan & Minuman</h1>
          <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {filteredProducts.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>
       </Container>
     </>
   )
 }

export function Default() {
   const context = useContext(DataContext)
   const navigate = useNavigate()

   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   function beliSekarang(produk) {
      if(context.userActive) {
         navigate("/buynow", {state: produk})
      } else {
         handleOpen()
      }
   }

   return (
     <>
       <Container sx={{minHeight: '370px'}}>
         <Grid2 container spacing={3} sx={{marginTop: '30px'}}>
            {context.products.map((p, index) => (
               <Grid2 key={index} size={3}>
                  <Card sx={{ maxWidth: 375 }}>
                     <CardMedia
                     component="img"
                     alt="green iguana"
                     height="140"
                     image={p.gambar}
                     />
                     <CardContent sx={{height: '120px'}}>
                     <Typography gutterBottom variant="h5" component="div">
                        {p.nama}
                     </Typography>
                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Rp {(p.harga).toLocaleString('ID-id')}
                     </Typography>
                     </CardContent>
                     <CardActions>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}}>Masukkan Keranjang</Button>
                     <Button variant='contained' sx={{backgroundColor: '#00b140'}} onClick={() => beliSekarang(p)}>Beli Sekarang</Button>
                     </CardActions>
                  </Card>
               </Grid2>
            ))}
         </Grid2>

         <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Peringatan
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Silakan login / signup terlebih dahulu untuk melanjutkan pembelian
          </Typography>
        </Box>
      </Modal>
    </div>
      </Container>
     </>
   )
 }