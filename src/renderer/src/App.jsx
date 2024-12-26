// import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import React, { useEffect, useState, useReducer } from 'react';
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import DataContext from './context/DataContext';
import dataReducer from './context/dataReducer';
import { ADD_PRODUCT, SET_PRODUCTS, SET_USERS, SET_TRANSACTIONS } from './context/types';

function App() {
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

   const addProduct = (product) => {
      dispatch({
         type: ADD_PRODUCT,
         payload: product
      })
   }

   // useEffect(() => {
   //    setProducts()
      // window.api.loadProducts().then((data) => {
      //    initialProducts.products = data
      // })
      // window.api.loadUsers().then((data) => {
      //    setUsers(data)
      // })
      // window.api.loadTransactions().then((data) => {
      //    setTransactions(data)
      // })
   // }, [])

   // useEffect(() => {
   //    window.api.saveProducts(products)
   // }, [products])
   // useEffect(() => {
   //    window.api.saveUsers(users)
   // }, [users])
   // useEffect(() => {
   //    window.api.saveTransactions(transactions)
   // }, [transactions])

  return (
    <DataContext.Provider
      value={{
         products: state.products,
         users: state.users,
         transactions: state.transactions,
         addProduct
      }}>
      <Navbar />
      <div style={{marginTop: '80px'}}>
         <Outlet></Outlet>
      </div>
      <Footer />
    </DataContext.Provider>
  )
}

export default App

