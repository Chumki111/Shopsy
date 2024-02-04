
import { GiDiscGolfBag } from 'react-icons/gi';
import footer from '../../assets/footer.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { useEffect } from 'react';
import Aos from 'aos';
const Footer = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const FooterImage = {
        backgroundImage: `url(${footer})`,  // Corrected typo here
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    }
    const footerLinks = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 2,
            name: 'Products',
            link: '/product'
        },
        {
            id: 3,
            name: 'Products',
            link: '/product'
        },
        {
            id: 4,
            name: 'Products',
            link: '/product'
        },
        {
            id: 5,
            name: 'Products',
            link: '/product'
        }
    ]
    return (
        <div className='text-white mb-20' style={FooterImage}>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-44 pt-5' data-aos="zoom-in">
                    {/* company details */}
                    <div className='py-8 px-4'>
                        <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <GiDiscGolfBag className="text-primary text-3xl" />Shopsy
                        </a>
                        <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis ullam perferendis commodi maxime culpa?</p>
                    </div>
                    {/* footer links */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 am:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        footerLinks.map((data) => (
                                            <li key={data.id} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                                <span>{data.name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        footerLinks.map((data) => (
                                            <li key={data.id} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                                <span>{data.name}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        {/* social links */}
                        <div>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="#">
                                    <FaInstagram className='text-3xl' />
                                </a>
                                <a href="#">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href="#">
                                    <FaLinkedin className='text-3xl' />
                                </a>

                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaLocationArrow />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaMobileAlt />
                                    <p>+91 123456789</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;