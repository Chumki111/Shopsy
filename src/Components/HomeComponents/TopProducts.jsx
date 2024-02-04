import { FaStar } from "react-icons/fa";
import { IoStarHalfOutline } from "react-icons/io5";
const data = [

    {
        id: 1,
        img: "https://i.ibb.co/ZHngHD9/71z-Ku-NICJAL-AC-UX625-removebg-preview.png",
        title: "Knit Ballet Flat",
        star: 1,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Adidas",
        color: "black",
        category: "flats",
    },
    {
        id: 2,
        img: "https://i.ibb.co/TghbZnp/71-Va-Q-V6-Xn-L-AC-UY695-removebg-preview.png",
        title: "Nike Zoom Freak",
        star: 2,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "green",
        category: "sneakers",
    },

    {
        id: 3,
        img: "https://i.ibb.co/ckKDysB/61-V9-APfz97-L-AC-UY695-removebg-preview.png",
        title: "Loafer Flats",
        star: 3,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "50",
        company: "Vans",
        color: "white",
        category: "flats",
    }]


const TopProducts = () => {
    return (
        <div>
            <div className="container">
                {/* header section */}
                <div className="text-left mb-24">
                    <p className="text-sm text-primary">Top Rated Products for you</p>
                    <h1 className="text-3xl font-bold"
                    >Best Products</h1>
                    <p className="text-xs text-gray-400" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit </p>
                </div>
                {/* body section section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-20 place-items-center">
                    {data.map((product) => (
                         <div key={product.id} className="max-[350px] md:w-[350px] hover:bg-black/80 dark:bg-gray-800  dark:hover:bg-primary hover:text-white relative duration-300 group  px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-xl">
                         {/* Card Image */}
                            <div>
                                 <img className="transform group-hover:scale-105 duration-300 drop-shadow-md" src={product.img} alt="" />
                            </div>
                             {/* details section */}
                             <div className="p-4 text-center">
                                  {/* rating */}
                                  <div className="flex justify-center gap-1 text-primary py-3">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <IoStarHalfOutline />

                                        </div>
                                        <h1 className="text-xl font-bold">{product.title}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 line-clamp-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, necessitatibus.</p>
                                        <div className="mt-4">
                                        <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full ml-4 group-hover:bg-white group-hover:text-primary">OrderNow</button>
                                        </div>
                             </div>
                         </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopProducts;