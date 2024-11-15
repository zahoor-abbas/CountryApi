import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error_page from './pages/Error_page.jsx';
import Home from './pages/Home.jsx';
import CountryDetail from './pages/CountryDetail.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<Error_page/>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/:country',
        element:<CountryDetail/>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
