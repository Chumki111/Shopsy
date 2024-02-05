import { Link } from "react-router-dom";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { Parallax } from "react-parallax";
import { useEffect } from "react";
import Aos from "aos";
import First from "../../Components/About/Faq/first";
import Second from "../../Components/About/Faq/Second";


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
           style={{ height: "400px" }}
       >
           <div className="hero-overlay bg-opacity-60"></div>
           <div className="text-center p-10 w-full container">
               <div className="mt-14">
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

   <div className="mb-16 mt-10">
            <div className="container">
            <div className="flex flex-col sm:flex-row md:flex-row mt-14 gap-10">
                <img src="https://i.ibb.co/yBvQHjg/young-smiling-fashion-consultant-joyfully-giving-shoes-in-box-to-client-in-store-e1617076325537.jpg" alt="" className="w-[410px] md:w-[450px] rounded-md object-cover border-t-8 border-l-8 border-primary transition delay-150 duration-300 ease-in-out hover:scale-90" data-aos="zoom-in"/>
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" data-aos="fade-up">Shopping . . .
</h2>
                    <p className="max-w-xl py-7" data-aos="fade-up">Our personal trainers can help you meet your fitness goals. They can become your teacher, your motivator, your coach and your friend. Our personal trainers are degreed and certified by an accredited fitness organization.</p>
                    {/* <ul className="list-image">
                        <li className="flex gap-4" data-aos="fade-up">
                            <IoCheckmarkDone className="text-xl text-primary" />Teach you to exercise using proper form to prevent injury
                        </li>
                        <li className="flex gap-4 py-3" data-aos="fade-up">
                            <IoCheckmarkDone className= "text-xl text-primary" />Add diversity to your workout to get over a weight-loss plateau
                        </li>
                        <li className="flex gap-4" data-aos="fade-up">
                            <IoCheckmarkDone className="text-xl text-primary" />Boost athletic performance with sport-specific training
                        </li>
                        <li className="flex gap-4 py-3" data-aos="fade-up">
                            <IoCheckmarkDone className="text-xl text-primary" />Give you the accountability and motivation to get to the gym
                        </li>
                        <li className="flex gap-4" data-aos="fade-up">
                            <IoCheckmarkDone className="text-xl text-primary" />Encourage you to try new fitness challenges and drive your health forward
                        </li>
                    </ul> */}
                    <First/>
                </div>
            </div>
            </div>
        </div>

           <div className="">
            <Second/>
           </div>
        </div>
    );
};

export default Faq;