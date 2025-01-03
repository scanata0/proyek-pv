import React, { useState, useReducer, useEffect, useContext } from 'react';
import { Link, Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField } from '@mui/material';

// import DataContext, { AuthContext } from '../context/Auth';
// import dataReducer from '../context/dataReducer';
// import { ADD_PRODUCT, SET_PRODUCTS, SET_USERS, SET_TRANSACTIONS, ADD_USER } from '../context/types';
import { AuthContext } from '../context/Auth';

function Signup() {
   const [inpNama, setInpNama] = useState('')
   const [inpEmail, setInpEmail] = useState('')
   const [inpUsername, setInpUsername] = useState('')
   const [inpPass, setInpPass] = useState('')
   const [inpConfirm, setInpConfirm] = useState('')
   // const [errConfirm, setErrConfirm] = useState('')
   const {signup, signupErr} = useContext(AuthContext)
   const navigate = useNavigate()

   function handleSignup() {
      signup(inpNama, inpEmail, inpUsername, inpPass, inpConfirm)
      navigate('/login')
   }

   // const initialData = {
   //    products: [],
   //    users: [],
   //    transactions: []
   // }

   // const [state, dispatch] = useReducer(dataReducer, initialData)

   // useEffect(() => {
   //    window.api.loadProducts().then((data) => {
   //       dispatch({
   //          type: SET_PRODUCTS,
   //          payload: data
   //       })
   //    })
   //    window.api.loadUsers().then((data) => {
   //       dispatch({
   //          type: SET_USERS,
   //          payload: data
   //       })
   //    })
   //    window.api.loadTransactions().then((data) => {
   //       dispatch({
   //          type: SET_TRANSACTIONS,
   //          payload: data
   //       })
   //    })
      
   // }, [dispatch])

   // function handleSubmit(e) {
   //    e.preventDefault()
   //    if(inpPass !== inpConfirm) {
   //       setErrConfirm('Input password tidak sama dengan konfirmasi password')
   //       return
   //    }
   //    const newUser = {
   //       id: state.users.length + 1,
   //       username: inpUsername,
   //       email: inpEmail,
   //       password: inpPass,
   //       nama: inpNama,
   //       saldo: 0,
   //       daftarPenjual: false,
   //       keranjang: []
   //    }
   //    // addUser(newUser)
   //    const newUsers = [...state.users, newUser]
   //    window.api.saveUsers(newUsers)
   //    navigate('/login')
   // }

   // function addUser(user) {
   //    dispatch({
   //       type: ADD_USER,
   //       payload: user
   //    })
   // }

  return (
    <>
      <Container>
         {/* <NavLink to='/login'>Login</NavLink>
         <NavLink to='/'>Home</NavLink> */}
         <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 8,
        }}
      >
        <Typography variant="h5">Daftar Akun Baru</Typography>

        <Box
          component="form"
          sx={{
            mt: 1,
            width: '100%',
          }}
        >
          <TextField
            label="Nama Lengkap"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpNama}
            onChange={(e) => setInpNama(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpEmail}
            onChange={(e) => setInpEmail(e.target.value)}
          />
          <TextField
            label="Username"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpUsername}
            onChange={(e) => setInpUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpPass}
            onChange={(e) => setInpPass(e.target.value)}
          />
          <TextField
            label="Konfirmasi Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpConfirm}
            onChange={(e) => setInpConfirm(e.target.value)}
          />
          {signupErr !== '' && (
            <Typography variant="h5" sx={{color: 'red', textAlign: 'center'}}>{signupErr}</Typography>
         )}

          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#00b94e',
              '&:hover': { backgroundColor: '#009e3f' },
              mt: 2,
              padding: '10px',
            }}
            onClick={handleSignup}
          >
            Signup
          </Button>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Sudah punya akun?{' '}
              <NavLink to="/login" style={{ textDecoration: 'none', color: '#00b94e' }}>
                Login Sekarang
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
      </Container>
    </>
  )
}

export default Signup