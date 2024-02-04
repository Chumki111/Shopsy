import { useEffect } from "react";
import Banner from "../../Components/HomeComponents/Banner";
import Products from "../../Components/HomeComponents/Products";
import AOS from "aos";
import "aos/dist/aos.css"
import TopProducts from "../../Components/HomeComponents/TopProducts";

const Home = () => {
    useEffect(() =>{
        AOS.init({
            offset:100,
            duration:800,
            easing:"ease-in-sine",
            delay:100
        });
    })
    return (
        <div>
            
         <Banner/>
         <Products/>
         <TopProducts/>
        </div>
    );
};

export default Home;