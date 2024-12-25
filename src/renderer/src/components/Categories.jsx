import React, { useState, useContext } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button } from '@mui/material';

import ProductsContext from '../context/DataContext';

export function RumahTangga() {
  return (
    <>
      <Container>
         <h1>Produk Rumah Tangga</h1>
      </Container>
    </>
  )
}

export function Elektronik() {
  return (
    <>
      <Container>
         <h1>Produk Elektronik</h1>
      </Container>
    </>
  )
}

export function Fashion() {
  return (
    <>
      <Container>
         <h1>Produk Fashion</h1>
      </Container>
    </>
  )
}

export function Kecantikan() {
   return (
     <>
       <Container>
          <h1>Produk Kecantikan</h1>
       </Container>
     </>
   )
 }

 export function Kesehatan() {
   return (
     <>
       <Container>
          <h1>Produk Kesehatan</h1>
       </Container>
     </>
   )
 }

 export function MakananMinuman() {
   return (
     <>
       <Container>
          <h1>Produk Makanan & Minuman</h1>
       </Container>
     </>
   )
 }

export function Default() {
   const context = useContext(ProductsContext)
   console.log(context.products);

   return (
     <>
       <Container>
         <h1>Produk Default</h1>
         {context.products.map((p) => (
            <div>{p.nama}</div>
         ))}
         {context.users.map((u) => (
            <div>{u.nama}</div>
         ))}
         {context.transactions.map((t) => (
            <div>{t.total}</div>
         ))}
      </Container>
     </>
   )
 }