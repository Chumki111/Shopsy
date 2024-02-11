import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const MainLayout = () => {
    // const location = useLocation();
    // console.log(location);
    // const noHeaderFooter = location.pathname.includes('login')
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
           <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;