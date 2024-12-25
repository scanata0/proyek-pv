import { createContext } from "react";

const DataContext = createContext({
   products: [],
   users: [],
   transactions: [],
   addProduct : (product) => {},
   setProducts: (products) => {}
})

export default DataContext