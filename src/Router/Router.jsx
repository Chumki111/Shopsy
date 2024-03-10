import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Faq from "../Pages/Faq/Faq";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import { getSingleRoom } from "../api/products";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/products',
          element:<Products/>
        },
        {
          path:'/product/:id',
          element:<ProductDetails/>,
          // loader:({params}) =>getSingleRoom(params.id)
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/faq',
          element:<Faq/>
        },
        {
          path:'/contact',
          element:<Contact/>
        },
        
        
      ]
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    }
    
  ]);

export default Router;