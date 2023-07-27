import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home/Home';
import Main from '../layout/Main';
import Category from '../pages/Home/Category/Category';
import ShowNews from '../pages/News/ShowNews';
import LoginLayout from '../layout/LoginLayout';
import Login from '../pages/Home/Login/Login';
import Register from '../pages/Home/Register/Register';
import News from '../layout/News';
import PrivateRoute from './PrivateRoute';
import Terms from '../pages/Home/Register/Terms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout></LoginLayout>,
    children: [
      {
       path: "/",
       element: <Home></Home>
      },
      {
        path : "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      }
    ]

  },
    {
      path: "/category",
      element: <Main></Main>,
      children: [
        {
          path: ":id",
          element: <PrivateRoute><Category></Category></PrivateRoute>,
          loader: ({params}) => fetch(`https://dragon-news-server-chadnee.vercel.app/categories/${params.id}`)
        }
      ]
    },
    {
      path: "/news",
      element: <News></News>,
      children: [
        {
          path: ":id",
          element:<PrivateRoute><ShowNews></ShowNews></PrivateRoute>,
          loader: ({params}) => fetch(`https://dragon-news-server-chadnee.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);

export default router;