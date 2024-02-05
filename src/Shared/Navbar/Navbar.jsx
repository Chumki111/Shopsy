import { GiDiscGolfBag } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "../../Components/DarkMode/DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

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
        link: '/products'
    }
]
const dropDownLink = [
    {
        id:1,
        name:'About Us',
        link:'/about'
    },
    {
        id:2,
        name:'Best Selling',
        link:'/trandingProduct'
    }
]
const Navbar = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <GiDiscGolfBag className="text-primary text-3xl" />Shopsy
                        </a>
                    </div>
                    {/* search input */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative hidden sm:block group">
                            <input type="text" name="" id="" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
                            <IoMdSearch
                                className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3"
                            />
                        </div>
                        {/* order button */}
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
            <div className="flex justify-center">
                <ul className="sm:flex items-center gap-4 py-1" data-aos="zoom-in">
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <Link className="inline-block px-4 hover:text-primary duration-200" to={data.link}>{data.name}</Link>
                            </li>
                        ))
                    }
                    {/* simple dropdown and links */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px] py-2">

                           Pages
                            <span>
                                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                            <ul>
                                {
                                 dropDownLink.map((data) =>(
                                    <li key={data.id}>
                                <Link className="inline-block w-full rounded-md p-2 hover:bg-primary/20" to={data.link}>{data.name}</Link>
                            </li>
                                 ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;