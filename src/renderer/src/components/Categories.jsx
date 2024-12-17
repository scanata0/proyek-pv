import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button } from '@mui/material';

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
   return (
     <>
       <Container>
         <h1>Produk Default</h1>
      </Container>
     </>
   )
 }