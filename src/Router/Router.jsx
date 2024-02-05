import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import About from "../Pages/About/About";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
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
        }
      ]
    },
  ]);

export default Router;