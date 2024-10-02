import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './LayOut/Layout.jsx';
import Home from './Home/Home.jsx';
import About from './Home/About/About.jsx';

// Define the router with your routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/about',
        element: <About/>
      }
    ],
  },
]);

// Render the application with a responsive container
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Responsive container that adjusts according to screen size */}
    <div className="max-w-full lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
