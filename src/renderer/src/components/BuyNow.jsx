import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, Modal } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import DataContext from '../context/DataContext';

const styleModal = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: 'background.paper',
   boxShadow: 24,
   p: 4,
 };


export default function BuyNow() {
   const [jumlah, setJumlah] = useState(1)
   // const [users, setUsers] = useState([])

   const context = useContext(DataContext)
   const user = context.userActive

   const location = useLocation()
   const produk = location.state

   const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()

//   useEffect(() => {
//    window.api.loadUsers().then((data) => {
//       setUsers(data)
//    })
//   })

  function handleBeli() {
   const arrBeli = [{produk, jumlah}]
   const sisaSaldo = user.saldo - (produk.harga* jumlah)
   user.saldo = sisaSaldo
   const newUsers = (context.users).map((u) => {
      if(u.index === user.index) {
         return {...u, saldo: sisaSaldo}
      } else {
         return u
      }
   })
   const newTransaction = {
      idTransaksi: context.transactions.length + 1,
      idPembeli: user.id,
      produkDibeli: [
         {
            idProduk: produk.id,
            jumlah: jumlah
         }
      ],
      total: (produk.harga* jumlah)
   }
   const newTransactions = [...context.transactions, newTransaction]
   window.api.saveUsers(newUsers)
   window.api.saveTransactions(newTransactions)
   navigate('/buysuccess', {state: arrBeli})
  }

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

            <Grid2 xs={12} md={6} maxWidth='650px'>
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

                  <Button variant="contained" fullWidth sx={{ padding: 1.5, backgroundColor: '#00b140' }} onClick={handleOpen}>
                     Beli Sekarang
                  </Button>
                  </CardContent>
               </Card>
            </Grid2>
            </Grid2>
         </Container>

         <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
         {
            user.saldo < (produk.harga)* jumlah ? (
               <Box sx={styleModal}>
               <Typography id="modal-modal-title" variant="h6" component="h2">
                  Saldo Anda tidak cukup
               </Typography>
               </Box>
            ) : (
               <Box sx={styleModal}>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                     Anda yakin ingin melanjutkan pembelian?
                  </Typography>
                  <Button variant='contained' id='modal-modal-description' sx={{ mt: 2, backgroundColor: '#00b140' }} onClick={handleBeli}>
                     Konfirmasi
                  </Button>
               </Box>
            )
         }
        
      </Modal>
    </div>
         </Container>

         
      </>
   )
}