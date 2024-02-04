import { useEffect } from 'react';
import subscribe from '../../assets/subscribe.jpg'
import Aos from 'aos';

const Subscribe = () => {
    useEffect(() =>{
        Aos.init()
      },[])
    const subscribeImage ={
        backgroundImage: `url(${subscribe})`,  // Corrected typo here
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    }
    return (
        <div className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' data-aos="zoom-in" style={subscribeImage}>
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                    <input data-aos="fade-up" type="email" name="" id="" placeholder='Enter your email' className='w-full p-3'/>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;