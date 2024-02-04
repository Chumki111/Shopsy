
import { GiDiscGolfBag } from 'react-icons/gi';
import footer from '../../assets/footer.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    const FooterImage = {
        backgroundImage: `url(${footer})`,  // Corrected typo here
        backgroundPosition: 'center',
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
        }
    ]
    return (
        <div className='text-white mb-20' style={FooterImage}>
            <div className='container'>

                <div className='grid md:grid-cols-3 pv-44 pt-5'>
                    {/* company details */}
                    <div className='py-8 px-4'>
                    <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <GiDiscGolfBag className="text-primary text-3xl" />Shopsy
                        </a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis ullam perferendis commodi maxime culpa?</p>
                    </div>
                    {/* footer links */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 am:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3'>
                                    {
                                        footerLinks.map((data) =>(
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
                                        footerLinks.map((data) =>(
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
                                 <FaInstagram className='text-3xl'/>
                                </a>
                                <a href="#">
                                 <FaFacebook className='text-3xl'/>
                                </a>
                                <a href="#">
                                 <FaLinkedin className='text-3xl'/>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;