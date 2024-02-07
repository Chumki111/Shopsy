import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";
import Faq from "../Pages/Faq/Faq";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


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
          path:'/about',
          element:<About/>
        },
        {
          path:'/faq',
          element:<Faq/>
        }
      ]
    },
  ]);

export default Router;