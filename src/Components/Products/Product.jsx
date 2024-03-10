import { FaStar } from "react-icons/fa";
import PrimaryButton from "../Button/PrimaryButton";
import { Link } from "react-router-dom";



const Product = ({ product }) => {
    return (
       
            <div
                data-aos="fade-up"
                 className=" px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md dark:text-white hover:scale-105 duration-300">
                {/* Card Image */}
                <img className="w-[300px] bg-gray-400 rounded-2xl" src={product.img} alt="" />
                {/* Card Heading */}
                <div className="space-y-2">
                    <h2 className="text-slate-800  dark:text-white font-medium md:text-xl sm:text-lg pt-3">{product.title}</h2>
                    {/* rating  */}
                    <div className="flex gap-1 text-primary py-3">
                        <FaStar />
                        <FaStar />
                        <FaStar />

                    </div>
                </div>
                {/* Price and action button */}
                <div className="mt-5 flex justify-between items-center font-medium pb-3">

                    <h2 className="md:text-xl text-gray-800 dark:text-white">${product.newPrice}</h2>
                    <h2 className="md:text-xl text-gray-500 line-through">{product.prevPrice}</h2>

                </div>
                <div className="flex justify-center">
                    <Link to={`/product/${product?._id}`}>
                    <PrimaryButton buttonText={"View Details"}/>
                    </Link>
                </div>
            </div>
        
    );
};

export default Product;