import Aos from "aos";
import { useEffect } from "react";
import Slider from "react-slick";
const testimonalData = [
    {
        id: 1,
        name: 'Anuj Panda',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt sit maxime voluptatem labore expedita distinctio non possimus.',
        image: 'https://i.ibb.co/B4YPD5L/download-1.jpg'
    },
    {
        id: 2,
        name: 'Rohit Khan',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt sit maxime voluptatem labore expedita distinctio non possimus.',
        image: 'https://i.ibb.co/9VK5fFx/download.jpg'
    },
    {
        id: 1,
        name: 'Ahbinav Sharma',
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nesciunt sit maxime voluptatem labore expedita distinctio non possimus.',
        image: 'https://i.ibb.co/yyqYXZK/download-2.jpg'
    }
]
const Testimonials = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const settings = {
        dots: true,
        arrows: false,
        Infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoPlay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    Infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
        ]
    }
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

                {/* testimonial cards */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                        testimonalData.map((data) =>(
                           <div key={data.id} className="my-6">
                             <div  className="flex flex-col gap-4 shadow-lg px-5 py-8 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                <div className="mb-4">
                                    <img src={data.image} alt="" className="rounded-full w-20 h-20"/>
                                </div>
                               <div className="flex flex-col items-center gap-4">
                               <div className="space-y-3">
                                    <p className="text-xs text-gray-500">{data.title}</p>
                                    <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
                                </div>
                               </div>
                               <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>

                            </div>
                           </div>
                        ))
                        }
                    </Slider>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;