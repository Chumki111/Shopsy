import Aos from "aos";
import { useEffect } from "react";
import Slider from "react-slick";
import PrimaryButton from "../Button/PrimaryButton";
const imageList = [
    {
        id: 1,
        image: 'https://shopsy-tcj.netlify.app/assets/women-NhG2D3pl.png',
        title: 'Upto 70% off on all Men`s Wear',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate saepe et esse nemo sit ut.'
    },
    {
        id: 1,
        image: 'https://shopsy-tcj.netlify.app/assets/shopping-vpNvhQDE.png',
        title: 'Upto 70% off on all Men`s Wear',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate saepe et esse nemo sit ut.'
    }
]
const Banner = () => {
    var settings = {
        dots: false,
        arrows: false,
        Infinite: false,
        speed: 800,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true
    }
    useEffect(() =>{
        Aos.init()
      },[])
    return (
        <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
            {/*banner pattern  */}
            <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9">

            </div>
            {/* hero section */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {
                        imageList.map((data) => (
                            <div key={data.id}>
                                <div className="grid grid-cols-1 sm:grid-cols-2">
                                    {/* text content section */}
                                    <div data-aos="zoom-in" className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                                        <p className="text-sm">{data.description}</p>
                                        <div>
                                           
                                             <PrimaryButton buttonText={`Order Now`}/>
                                        </div>
                                    </div>
                                    {/* image section */}
                                    <div className="order-1 sm:order-2">
                                        <div className="relative z-10">
                                            <img src={data.image} alt="" className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-100 object-contain mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Slider>

            </div>
        </div>
    );
};

export default Banner;