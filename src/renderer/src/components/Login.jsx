import React, { useState } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button } from '@mui/material';

function Home() {

  return (
    <>
      <Container>
         <h1>Halaman Login</h1>
         <NavLink to='/signup'>Signup</NavLink>
         <NavLink to='/home'>Home</NavLink>
      </Container>
    </>
  )
}

export default Home