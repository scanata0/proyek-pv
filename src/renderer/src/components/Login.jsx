import React, { useState, useContext, useReducer, useEffect } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container, Paper, Button, Box, Typography, TextField } from '@mui/material';

import DataContext from '../context/DataContext';
import dataReducer from '../context/dataReducer';
import { ADD_PRODUCT, SET_PRODUCTS, SET_USERS, SET_TRANSACTIONS, SET_USERACTIVE } from '../context/types';

function Login() {
   const [inpEmail, setInpEmail] = useState('')
   const [inpPass, setInpPass] = useState('')
   const [errorMsg, setErrorMsg] = useState('')
   const navigate = useNavigate()

   const initialData = {
         products: [],
         users: [],
         transactions: []
      }
   
      const [state, dispatch] = useReducer(dataReducer, initialData)
   
      useEffect(() => {
         window.api.loadProducts().then((data) => {
            dispatch({
               type: SET_PRODUCTS,
               payload: data
            })
         })
         window.api.loadUsers().then((data) => {
            dispatch({
               type: SET_USERS,
               payload: data
            })
         })
         window.api.loadTransactions().then((data) => {
            dispatch({
               type: SET_TRANSACTIONS,
               payload: data
            })
         })
      }, [dispatch])
   

   function handleSubmit(e) {
      e.preventDefault();
      setErrorMsg('')
      for (let i = 0; i < (state.users).length; i++) {
         
         if(inpEmail === (state.users)[i].email && inpPass === (state.users)[i].password) {
            navigate("/home", {state: (state.users)[i]})
            return
         }
      }
      setErrorMsg('Username / Password Salah')
      return
   }

  return (
    <>
         {/* <NavLink to='/signup'>Signup</NavLink>
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
        <Typography variant="h5">LOGIN</Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            width: '100%',
          }}
        >
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
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            required
            value={inpPass}
            onChange={(e) => setInpPass(e.target.value)}
          />
          {errorMsg !== '' && (
            <Typography variant="h5" sx={{color: 'red', textAlign: 'center'}}>{errorMsg}</Typography>
          )}
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#00b94e',
              '&:hover': { backgroundColor: '#009e3f' },
              mt: 2,
              padding: '10px',
            }}
          >
            Login
          </Button>

          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              Belum punya akun?{' '}
              <NavLink to="/signup" style={{ textDecoration: 'none', color: '#00b94e' }}>
                Daftar Sekarang
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
    </>
  )
}

export default Login