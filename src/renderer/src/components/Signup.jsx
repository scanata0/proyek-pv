import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button } from '@mui/material';

function Home() {

  return (
    <>
      <Container>
         <h1>Halaman Signup</h1>
         <NavLink to='/login'>Login</NavLink>
         <NavLink to='/home'>Home</NavLink>
      </Container>
    </>
  )
}

export default Home