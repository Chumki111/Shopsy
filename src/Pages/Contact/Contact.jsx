import { FaUserCog } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import PrimaryButton from "../../Components/Button/PrimaryButton";
import { BsTextareaT } from "react-icons/bs";
const Contact = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <div>
                        <h1 className="text-3xl font-semibold">Contact Us</h1>
                        {/* name input */}
                        <label className="relative block my-3">
                            <span className="sr-only">Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <FaUserCog className="dark:text-black"/>
                                </span>
                            <input className="placeholder:italic w-[500px] placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none dark:bg-gray-100 focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm" placeholder="Write your name..." type="text" name="name" />
                        </label>
                        {/* email input */}
                        <label className="relative block my-3">
                            <span className="sr-only">Name</span>
                            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <MdOutlineMailLock className="dark:text-black"/>
                                </span>
                            <input className="placeholder:italic w-[500px] placeholder:text-slate-400 block dark:bg-gray-100 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm" placeholder="Write your email..." type="email" name="email" />
                        </label>
                        {/* textarea */}
                        <label className="relative block my-3">
                            <span className="sr-only">Name</span>
                            <span className="absolute left-0 flex pl-2">
                            
                            <BsTextareaT className="dark:text-black mt-3"/>
                                </span>
                            
                            <textarea  className="placeholder:italic w-[500px] placeholder:text-slate-400 block dark:bg-gray-100 bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-secondary focus:ring-secondary focus:ring-1 sm:text-sm" placeholder="Write your email..." name="" id="" cols="30" rows="7"></textarea>
                        </label>
                        <PrimaryButton buttonText="Submit"/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;