import { ADD_PRODUCT, SET_PRODUCTS, SET_USERS, SET_TRANSACTIONS, ADD_USER, SET_USERACTIVE, EDIT_PRODUCT } from "./types";

function addProduct(product, state) {
   const newProducts = [...state.products, product]
   return{
      ...state,
      products: newProducts
   }
}

function addUser(user, state) {
   const newUsers = [...state.users, user]
   return{
      ...state,
      users: newUsers
   }
}

function setProducts(loadedProducts, state) {
   return{
      ...state,
      products: loadedProducts
   }
}

function editProduct(product, state) {
   const newProducts = state.products.map((p) => {
      if(product.idProduk === p.idProduk) {
         return product
      } else {
         return p
      }
   })
   return {
      ...state,
      products: newProducts
   }
}

function setUsers(loadedUsers, state) {
   return{
      ...state,
      users: loadedUsers
   }
}

function setTransactions(loadedTransactions, state) {
   return{
      ...state,
      transactions: loadedTransactions
   }
}

function setUserActive(user, state) {
   return{
      ...state,
      userActive: user
   }
}

export default (state, action) => {
   switch(action.type){
      case ADD_PRODUCT:
         return addProduct(action.payload, state)
      case SET_PRODUCTS:
         return setProducts(action.payload, state)
      case EDIT_PRODUCT:
         return editProduct(action.payload, state)
      case ADD_USER:
         return addUser(action.payload, state)
      case SET_USERS:
         return setUsers(action.payload, state)
      case SET_TRANSACTIONS:
         return setTransactions(action.payload, state)
      case SET_USERACTIVE:
         return setUserActive(action.payload, state)
      default:
         return state;
   }
}