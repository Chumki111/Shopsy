import Aos from "aos";
import { useEffect } from "react";

const Testimonials = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-sm text-primary" data-aos="fade-up">What our customers are saying</p>
                    <h1 className="text-3xl font-bold" 
                        data-aos="fade-up">Testimonials</h1>
                        <p className="text-xs text-gray-400" data-aos="fade-up">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit</p>
                    
                </div>

            </div>
        </div>
    );
};

export default Testimonials;