import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack } from '@mui/material';

import DataContext from '../context/DataContext';

export default function Profile() {
   // const location = useLocation()
   // const [user, setUser] = useState(location.state)

   const context = useContext(DataContext)
   const user = context.userActive
   
   return (
      <>
         <Container sx={{minHeight: '700px'}}>
         {/* <h1>{user.nama}</h1> */}
         <Container maxWidth="lg" sx={{ paddingTop: 3 }}>
         <Grid2 container spacing={3}>
         <Grid2 size={4}>
            <Card variant="outlined" sx={{ padding: 2 }}>
               <Box textAlign="center">
               <Avatar
                  alt="User Avatar"
                  sx={{ width: 120, height: 120, marginBottom: 2, mx: 'auto'}}
               />
               <Typography variant="h6">{user.nama}</Typography>
               <Typography color="textSecondary">{user.username}</Typography>
               <Typography variant="h6" sx={{marginTop: '30px'}}>Saldo : Rp {(user.saldo).toLocaleString('ID-id')}</Typography>
               <NavLink to='/login'><Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#00b140' }}>
                Logout
              </Button></NavLink>
               </Box>
            </Card>
         </Grid2>

         <Grid2 size={8}>
            <Card variant="outlined">
               <CardContent>
               <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Informasi Akun
               </Typography>
               <Divider sx={{ marginBottom: 2 }} />
               <Stack spacing={3}>
                  <Paper>
                  <Typography variant="body1">Nama User</Typography>
                  <Typography color="textSecondary">{user.nama}</Typography>
                  </Paper>
                  <Paper>
                  <Typography variant="body1">Username</Typography>
                  <Typography color="textSecondary">{user.username}</Typography>
                  </Paper>
                  <Paper>
               <Typography variant="body1">Email</Typography>
               <Typography color="textSecondary">{user.email}</Typography>
               </Paper>
               </Stack>
               
               </CardContent>
            </Card>
         </Grid2>
         </Grid2>

         <Box>
            {user.daftarPenjual ? (
               <h1>List Produk Anda</h1>
            ) : (
               <Button variant="contained" sx={{ marginTop: 2, backgroundColor: '#00b140' }}>
                Daftar Penjual
              </Button>
            )}
         </Box>
      </Container>
         </Container>
      </>
   )
}