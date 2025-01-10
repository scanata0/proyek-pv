import { createContext, useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

export const AuthContext = createContext("")

export default function Auth({children}) {
   const [arrUsers, setArrUsers] = useState([])
   const [arrProducts, setArrProducts] = useState([])
   const [arrTransactions, setArrTransactions] = useState([])
   const [userActive, setUserActive] = useState(undefined)
   const [loginErr, setLoginErr] = useState('')
   const [signupErr, setSignupErr] = useState('')
   const [productEdit, setProductEdit] = useState(undefined)
   const [productClicked, setProductClicked] = useState(undefined)
   const [transActive, setTransActive] = useState(undefined)
   // const [arrBeli, setArrBeli] = useState([])

   useEffect(() => {
      window.api.loadUsers().then((data) => {
         setArrUsers(data)
      })
      window.api.loadProducts().then((data) => {
         setArrProducts(data)
      })
      window.api.loadTransactions().then((data) => {
         setArrTransactions(data)
      })
   }, [])

   function login(email, password) {
      setLoginErr('')
      for (let i = 0; i < arrUsers.length; i++) {
         if(email === arrUsers[i].email && password === arrUsers[i].password) {
            setUserActive(arrUsers[i])
            return true
         }
      }
      setLoginErr('Username / Password Salah')
      return false
   }

   function logout() {
      setUserActive(undefined)
   }

   function signup(nama, email, username, password, confirm) {
      if(password !== confirm) {
         setSignupErr('Input password tidak sama dengan konfirmasi password')
         return
      }
      const newUser = {
         id: arrUsers.length + 1,
         username,
         email,
         password,
         nama,
         saldo: 0,
         daftarPenjual: false,
         keranjang: []
      }
      const newUsers = [...arrUsers, newUser]
      setArrUsers(newUsers)
      window.api.saveUsers(newUsers)
   }

   function addProduct(product) {
      const newProducts = [...arrProducts, product]
      setArrProducts(newProducts)
      window.api.saveProducts(newProducts)
   }

   function editProduct(product) {
      const newProducts = arrProducts.map((p) => {
         if(product.idProduk === p.idProduk) {
            return product
         } else {
            return p
         }
      })
      setArrProducts(newProducts)
      window.api.saveProducts(newProducts)
      setProductEdit(undefined)
   }

   function deleteProduct(idx) {
      const newProducts = arrProducts.filter((p) => p.idProduk !== idx)
      setArrProducts(newProducts)
      window.api.saveProducts(newProducts)
   }

   function moveEditPage(product) {
      setProductEdit(product)
   }

   function moveBuyNowPage(product) {
      setProductClicked(product)
   }

   function buyProducts(productsDibeli) {
      let total = 0
      let arrBeli = []
      let newProducts = arrProducts.slice()
      for (let i = 0; i < productsDibeli.length; i++) {
         total += ((productsDibeli[i].produk).harga * productsDibeli[i].jumlah)
         arrBeli.push({idProduk: (productsDibeli[i].produk).idProduk, jumlah: productsDibeli[i].jumlah})
         newProducts = newProducts.map((p) => p.idProduk == (productsDibeli[i].produk).idProduk ? ({...p, stok: p.stok-1}) : p)
         console.log(newProducts);
         
      }
      const sisaSaldo = userActive.saldo - total
      userActive.saldo = sisaSaldo
      const newUsers = arrUsers.map((u) => {
         if(u.id === userActive.id) {
            return {...u, saldo: sisaSaldo}
         } else {
            return u
         }
      })
      const newTransaction = {
         idTransaksi: arrTransactions.length + 1,
         idPembeli: userActive.id,
         produkDibeli: arrBeli,
         total
      }
      const newTransactions = [...arrTransactions, newTransaction]
      setArrUsers(newUsers)
      setArrProducts(newProducts)
      setArrTransactions(newTransactions)
      setTransActive(productsDibeli)
      window.api.saveUsers(newUsers)
      window.api.saveProducts(newProducts)
      window.api.saveTransactions(newTransactions)
   }

   function userDaftarPenjual() {
      userActive.daftarPenjual = true
      const newUsers = arrUsers.map((u) => u.id == userActive.id ? userActive : u)
      setArrUsers(newUsers)
      window.api.saveUsers(newUsers)
   }

   const auth = {arrUsers, arrProducts, arrTransactions, userActive, login, logout, signup, loginErr, signupErr, addProduct, editProduct, deleteProduct, productEdit, moveEditPage, moveBuyNowPage, productClicked, buyProducts, transActive, userDaftarPenjual}
   return <AuthContext.Provider value={auth}>
      {children}
   </AuthContext.Provider>
}