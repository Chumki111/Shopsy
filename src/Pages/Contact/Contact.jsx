import PrimaryButton from "../../Components/Button/PrimaryButton";
// react icons
import { FaPhoneVolume, FaUserCog } from "react-icons/fa";
import { MdLocationOn, MdMarkEmailRead, MdOutlineMailLock } from "react-icons/md";
import { BsTextareaT } from "react-icons/bs";
import { useEffect } from "react";
import Aos from "aos";
const Contact = () => {
    // aos animation
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div className="mt-12">
            <div className="container">
                {/* contact header */}
            <h1 className="text-3xl font-semibold text-center dark:text-gray-300" data-aos="fade-up">Contact Us</h1>
                        <p className="max-w-lg mx-auto text-center text-gray-400" data-aos="fade-up">Alternatively, you can contact us directly via email or phone using the information provided below. Our dedicated team is ready to assist you with any questions or concerns you may have.</p>
                <div className="flex flex-col lg:flex-row mt-14 justify-between">
                    <div className="mb-10">
                        
                        {/* name input */}
                        <label className="relative block my-3" data-aos="fade-up">
                            <span className="sr-only">Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaUserCog className="dark:text-black"/>
                                </span>
                            <input className="placeholder:italic w-full md:w-[500px] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none dark:bg-gray-100 focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm" placeholder="Write your name..." type="text" name="name" />
                        </label>
                        {/* email input */}
                        <label className="relative block my-3" data-aos="fade-up">
                            <span className="sr-only">Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdOutlineMailLock className="dark:text-black"/>
                                </span>
                            <input className="placeholder:italic w-full md:w-[500px] placeholder:text-slate-400 block dark:bg-gray-100 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm" placeholder="Write your email..." type="email" name="email" />
                        </label>
                        {/* textarea */}
                        <label className="relative block my-3" data-aos="fade-up">
                            <span className="sr-only">Name</span>
                            <span className="absolute left-0 flex pl-2">
                            
                            <BsTextareaT className="dark:text-black mt-3"/>
                                </span>
                            
                            <textarea  className="placeholder:italic w-full md:w-[500px] placeholder:text-slate-400 block dark:bg-gray-100 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm" placeholder="Write your email..." name="" id="" cols="30" rows="7"></textarea>
                        </label>
                        <PrimaryButton buttonText="Submit"/>
                    </div>
                    {/* google map */}
                    <div>
               
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.222625936205!2d88.7679444708422!3d24.338736517941896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf72bef5c6d6f%3A0xe052da14b6ad2a82!2sSholua%20degree%20College!5e0!3m2!1sen!2sbd!4v1707330817070!5m2!1sen!2sbd" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full md:w-[600px]"></iframe>
                </div>
                   
               
                </div>
                {/* contact information */}
                <div className="shadow-md dark:text-gray-300 border-b-4 border-secondary mb-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-5">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <MdLocationOn className="animate-bounce text-secondary text-3xl" />
          </div>
          <h2 className="font-semibold text-2xl">Visit our location</h2>
          <p>Sector-03, Dhaka-1230.</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <FaPhoneVolume className="animate-ping text-secondary text-3xl" />
          </div>
          <h2 className="font-semibold text-2xl">Contact us now</h2>
          <p>+880-01233-456789</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center items-center">
            <MdMarkEmailRead className="text-secondary text-3xl" />
          </div>
          <h2 className="font-semibold text-2xl">Contact us now</h2>
          <p>chumkikhatun370@gmail.com</p>
        </div>
       
      </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;