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
import Portfolio from './Home/Portfolio/Portfolio.jsx';
import Blog from './Home/Blog/Blog.jsx';
import BlogPost from './Home/Blog/BlogPost.jsx';
import Contact from './Home/Contact/Contact.jsx';

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
      },
      {
        path:'/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:'/blogPost',
        element: <BlogPost></BlogPost>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }
    ],
  },
]);

// Render the application with a responsive max-w-7xl
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Responsive max-w-7xl that adjusts according to screen size */}
    <div className="max-w-full lg:max-w-6xl xl:max-w-7xl mx-8 md:mx-16 lg:mx-auto px-4 sm:px-6 lg:px-8">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
