import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './components/Home'

import About from './components/About'
import Policy from './components/Policy'

import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/gamers/",
    element: <App />,
    children: [
      {
        path: "/gamers/",
        element: <Home />,
      },
      {
        path: "/gamers/contact",
        element: <Contact />,
      },
      {
        path: "/gamers/gallery",
        element: <Gallery />,
      },
      {
        path: "/gamers/about",
        element: <About />,
      },
      {
        path: "/gamers/policy",
        element: <Policy />,
      },
      {
        path: "/gamers/footer",
        element: <Footer />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />
  </React.StrictMode>,
)
