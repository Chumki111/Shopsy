import { Link } from "react-router-dom"
import PrimaryButton from "../Button/PrimaryButton"
import { Parallax } from "react-parallax"
import { useEffect } from "react"
import Aos from "aos"
import { Helmet } from "react-helmet-async"


function FirstSection() {
    useEffect(() =>{
        Aos.init()
      },[])
  return (
    <div>
        {/* first section */}
        <Helmet>
            <title>Shopsy || Products</title>
        </Helmet>
       <Parallax
           blur={4}
           bgImage={
               "https://i.ibb.co/r5fK29T/shoe-aisle-in-store-lots-of-shoes-on-racks-e1617157764983.jpg"

           }
           bgImageAlt="the cat"
           strength={300}
           className="w-full rounded-lg"
           style={{ height: "300px" }}
       >
           <div className="hero-overlay bg-opacity-60"></div>
           <div className="text-center p-10 w-full container">
               <div className="">
                   <div>
                       <h1 className="mb-5 text-5xl text-center font-bold text-white" data-aos="fade-up">All Products</h1>
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
  )
}

export default FirstSection