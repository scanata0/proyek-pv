import React, { useContext, useState } from 'react';
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField, Grid2, Card, Avatar, CardContent, Divider, Stack, CardMedia, CardActions, Modal } from '@mui/material';

import DataContext from '../context/DataContext';

export default function History() {
   const context = useContext(DataContext)
   const user = context.userActive

   return (
      <>
         <Container sx={{minHeight: '680px', marginTop: '100px'}}>
            <Typography variant='h5'>Riwayat Transaksi Anda</Typography>
            <Box>
               {context.transactions.map((t, index) => {
                  if(t.idPembeli === user.id) {
                     return <div key={index}>{t.idTransaksi} - {t.idPembeli}</div>
                  }
               })}
            </Box>
         </Container>
      </>
   )
}