import { IoCheckmarkDone } from "react-icons/io5";
import image from '../../assets/about.jpg'
import { useEffect } from "react";
import Aos from "aos";
const SecondSection = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div className="mb-16 mt-10">
            <div className="container">
            <div className="flex flex-col sm:flex-row md:flex-row mt-14 gap-10">
                <img src={image} alt="" className="w-[410px] md:w-[450px] rounded-md object-cover border-t-8 border-l-8 border-primary transition delay-150 duration-300 ease-in-out hover:scale-90" data-aos="zoom-in"/>
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" data-aos="fade-up">Serve Best Quality Products</h2>
                    <p className="max-w-xl py-7" data-aos="fade-up">Our personal trainers can help you meet your fitness goals. They can become your teacher, your motivator, your coach and your friend. Our personal trainers are degreed and certified by an accredited fitness organization.</p>
                    <ul className="list-image">
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
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SecondSection;