import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import Aos from "aos";


const Faq = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div>
           
           <div className="mb-10">
        {/* first section */}
       <Parallax
           blur={4}
           bgImage={
               "https://i.ibb.co/7RzRq3p/woman-buys-dishes-in-the-store.jpg"

           }
           bgImageAlt="the cat"
           strength={300}
           className="w-full rounded-md"
           style={{ height: "300px" }}
       >
           <div className="hero-overlay bg-opacity-60"></div>
           <div className="text-center p-10 w-full container">
               <div className="">
                   <div>
                       <h1 className="mb-5 text-5xl text-center font-bold text-white" data-aos="fade-up">FAQ</h1>
                       <p className="mb-5 text-primary" data-aos="fade-up">
                       Innovative solutions, exceptional experiences.
                       </p>
                   </div>
                   
                   <Link to={"/"}>
                    <PrimaryButton buttonText={"Go To Home"}/>
                   </Link>
                  

               </div>
           </div>

       </Parallax>
   </div>

           
        </div>
    );
};

export default Faq;