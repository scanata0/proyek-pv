import { createContext } from "react";

const DataContext = createContext({
   products: [],
   users: [],
   transactions: [],
   userActive: {},
   addProduct : (product) => {},
   setProducts: (products) => {},
   editProduct: (product) => {},
   setUsers: (users) => {},
   setTransactions: (transactions) => {},
   setUserActive: (user) => {}
})

export default DataContext