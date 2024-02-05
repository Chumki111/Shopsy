import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";
// react icons
import { FaHome } from "react-icons/fa";
import { TbBrandNem } from "react-icons/tb";
import { BiHappyBeaming } from "react-icons/bi";
const Count = () => {
    const [counter,setCounter] = useState(false)
    return (
        <div className="my-10">
            <div className="container">
            <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
                    {/* first card */}
                
                <div className="bg-white dark:bg-gray-800 text-center shadow-lg space-y-3 rounded">
              <div className="flex justify-center items-center">
              <FaHome className="text-6xl pt-4 hover:text-primary"/>
              </div>
              <h2 className="text-4xl font-semibold">
                { counter && <CountUp start={0} end={300} duration={2} delay={0}/>}
                <span className="text-primary">+</span></h2>
              <h2 className="text-3xl font-semibold pb-4">Offline Store</h2>

                </div>
                {/* second card */}
                <div className="bg-white dark:bg-gray-800 text-center shadow-lg space-y-3 rounded">
              <div className="flex justify-center items-center">
              <TbBrandNem  className="text-6xl pt-4 hover:text-primary"/>
              </div>
              <h2 className="text-4xl font-semibold">
                { counter && <CountUp start={0} end={150} duration={2} delay={0}/>}
                <span className="text-primary">+</span></h2>
              <h2 className="text-3xl font-semibold pb-4">Sneaker Brand</h2>

                </div>
                {/* third card */}
                <div className="bg-white dark:bg-gray-800 text-center shadow-lg space-y-3 rounded">
              <div className="flex justify-center items-center">
              <BiHappyBeaming  className="text-6xl pt-4 hover:text-primary"/>
              </div>
              <h2 className="text-4xl font-semibold">
                { counter && <CountUp start={0} end={90} duration={2} delay={0}/>}
                <span className="text-primary">%</span></h2>
              <h2 className="text-3xl font-semibold pb-4">Happy Customer</h2>

                </div>
                
                </div>
                </ScrollTrigger>
            </div>
        </div>
    );
};

export default Count;