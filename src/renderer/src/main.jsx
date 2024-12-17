import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import {Elektronik, Default, Fashion, Kecantikan, Kesehatan, MakananMinuman} from './components/Categories'
import {
   createBrowserRouter,
   Navigate,
   RouterProvider,
 } from "react-router-dom";

const router = createBrowserRouter([
   {
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
            children: [
               {
                  index: true,
                  element: <Default />
               }
            ]
         },
         {
            path: "/home",
            element: <Home />,
            children: [
               {
                  path: "elektronik",
                  element: <Elektronik />
               },
               {
                  path: "fashion",
                  element: <Fashion />
               },
               {
                  path: "kecantikan",
                  element: <Kecantikan />
               },
               {
                  path: "kesehatan",
                  element: <Kesehatan />
               },
               {
                  path: "makananMinuman",
                  element: <MakananMinuman />
               }
            ]
         }
      ]
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/signup',
      element: <Signup />
   }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
