import { GiDiscGolfBag } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "../../Components/DarkMode/DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Aos from "aos";
import 'react-modern-drawer/dist/index.css';
import { CgMenuGridO } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import Drawer from 'react-modern-drawer';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        Aos.init();
    }, []);

    const Menu = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Products',
            link: '/products'
        },
        {
            id: 3,
            name: 'Contact Us',
            link: '/contact'
        },
        {
            id:4,
            name:'Login',
            link:'/login'
        }
    ];

    const dropDownLink = [
        {
            id:1,
            name:'About Us',
            link:'/about'
        },
        {
            id:2,
            name:'FAQ',
            link:'/faq'
        },
        {
            id:3,
            name:'Registration',
            link:'/register'
        }
    ];

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
                {/* upper navbar */}
                <div className="bg-primary/40 py-2">
                    <div className="container flex justify-between items-center">
                        <div>
                            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                                <GiDiscGolfBag className="text-primary text-3xl" />Shopsy
                            </a>
                        </div>
                        {/* search input and order button */}
                        <div className="flex justify-between items-center gap-4">
                            <div className="relative hidden sm:block group">
                                <input type="text" name="" id="" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                            </div>
                            <button className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group">
                                <span className="group-hover:block hidden transition-all duration-200">Order</span>
                                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
                            </button>
                            {/* dark switch */}
                            <div>
                                <DarkMode />
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                {/* lower navbar */}
                <div className="flex justify-end md:justify-center">
                    <label onClick={toggleDrawer} className="btn btn-square md:hidden btn-ghost mr-4">
                        <CgMenuGridO className="text-[#00ADB5] text-3xl"></CgMenuGridO>
                    </label>
                    <ul className="sm:flex items-center gap-4 py-1" data-aos="zoom-in">
                        {Menu.map((data) => (
                            <li key={data.id}>
                                <Link className="hidden md:inline-block px-4 hover:text-primary duration-200" to={data.link}>{data.name}</Link>
                            </li>
                        ))}
                        {/* simple dropdown and links */}
                        <li className="group relative cursor-pointer">
                            <a href="#" className="md:flex hidden items-center gap-[2px] py-2">
                                Pages
                                <span>
                                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                                </span>
                            </a>
                            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                                <ul>
                                    {dropDownLink.map((data) => (
                                        <li key={data.id}>
                                            <Link className="hidden md:inline-block w-full rounded-md p-2 hover:bg-primary/20" to={data.link}>{data.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Drawer for smaller screens */}
            <Drawer open={isOpen} onClose={toggleDrawer} direction='right' className='bla bla bla'>
                <div className="flex justify-end">
                    <label onClick={toggleDrawer} className="btn btn-square lg:hidden btn-ghost m-6">
                        <IoMdClose className=" text-2xl"></IoMdClose>
                    </label>
                </div>
                <ul className="flex justify-center items-end px-10 flex-col font-medium">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <Link className="inline-block w-full rounded-md p-2 hover:bg-primary/20" to={data.link}>{data.name}</Link>
                        </li>
                    ))}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">
                            Pages
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {dropDownLink.map((data) => (
                                    <li key={data.id}>
                                        <Link className="inline-block w-full rounded-md p-2 hover:bg-primary/20" to={data.link}>{data.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </Drawer>
        </>
    );
};

export default Navbar;
