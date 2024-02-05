import Aos from "aos";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";


const SecondParalax = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div>
        {/* first section */}
       <Parallax
           blur={6}
           bgImage={
               "https://i.ibb.co/sHkhPJ7/woman-wearing-sport-shoes-at-home.jpg"

           }
           bgImageAlt="the cat"
           strength={300}
           className="w-full rounded-lg md:h-[500px] sm:h-full"
           
       >
           <div className="opacity-60"></div>
           <div className="text-center p-10 w-full container">
               <div className="">
                   <div className="pt-14">
                       <h1 className="mb-5 text-5xl  text-center font-bold text-white/80" data-aos="fade-up">BEST FIT. BEST QUALITY. BEST <br /> MODEL SNEAKER.</h1>
                       <p className="mb-5 text-primary max-w-[600px] mx-auto" data-aos="fade-up">
                       Welcome to our company! We are dedicated to providing high-quality services and products to our customers.  Explore our website to learn more about our mission, values, and the exciting features we offer.
                       </p>
                   </div>
                   <div className="group">
                   <Link to={"/products"}>
                    
                    <PrimaryButton buttonText="Shop Now"/>
                   </Link>
                   </div>

               </div>
           </div>

       </Parallax>
   </div>
    );
};

export default SecondParalax;