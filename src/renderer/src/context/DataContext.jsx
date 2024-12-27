import { createContext } from "react";

const DataContext = createContext({
   products: [],
   users: [],
   transactions: [],
   userActive: {},
   addProduct : (product) => {},
   setProducts: (products) => {},
   setUserActive: (user) => {}
})

export default DataContext