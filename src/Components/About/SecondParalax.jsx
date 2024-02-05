import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";


const SecondParalax = () => {
    return (
        <div>
        {/* first section */}
       <Parallax
           blur={2}
           bgImage={
               "https://i.ibb.co/sHkhPJ7/woman-wearing-sport-shoes-at-home.jpg"

           }
           bgImageAlt="the cat"
           strength={300}
           className="w-full rounded-lg"
           style={{ height: "500px" }}
       >
           <div className="hero-overlay bg-opacity-60"></div>
           <div className="text-center p-10 w-full container">
               <div className="">
                   <div className="pt-14">
                       <h1 className="mb-5 text-5xl  text-center font-bold text-white/80">BEST FIT. BEST QUALITY. BEST <br /> MODEL SNEAKER.</h1>
                       <p className="mb-5 text-primary max-w-[600px] mx-auto">
                       Welcome to our company! We are dedicated to providing high-quality services and products to our customers.  Explore our website to learn more about our mission, values, and the exciting features we offer.
                       </p>
                   </div>
                   <Link to={"/products"}>
                   <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">Shop Now</button></Link>

               </div>
           </div>

       </Parallax>
   </div>
    );
};

export default SecondParalax;