
import Banner from "../../Components/HomeComponents/Banner";
import Products from "../../Components/HomeComponents/Products";

import "aos/dist/aos.css"
import TopProducts from "../../Components/HomeComponents/TopProducts";
import Sale from "../../Components/HomeComponents/Sale";
import Subscribe from "../../Components/HomeComponents/Subscribe";
import Testimonials from "../../Components/HomeComponents/Testimonials";

const Home = () => {
   
    return (
        <div>
            
         <Banner/>
         <Products/>
         <TopProducts/>
         <Sale/>
         <Subscribe/>
         <Products/>
         <Testimonials/>
        </div>
    );
};

export default Home;