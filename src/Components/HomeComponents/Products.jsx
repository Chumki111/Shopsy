

import { FaStar } from "react-icons/fa";

const data = [
    {
        id: 1,
        img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
        title: "Nike Air Monarch IV",
        star: 1,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "white",
        category: "sneakers",
    },
    {
        id: 2,
        img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
        title: "Nike Air Vapormax Plus",
        star: 2,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "red",
        category: "sneakers",
    },

    {
        id: 3,
        img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
        title: "Nike Waffle One Sneaker",
        star: 3,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Nike",
        color: "green",
        category: "sneakers",
    },
    {
        id: 4,
        img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
        title: "Nike Running Shoe",
        star: 4,
        reviews: "(123 reviews)",
        prevPrice: "$140,00",
        newPrice: "200",
        company: "Adidas",
        color: "black",
        category: "sneakers",
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
        title: "Flat Slip On Pumps",
        star: 4,
        reviews: "(123 reviews)",
        prevPrice: "140,00",
        newPrice: "200",
        company: "Vans",
        color: "green",
        category: "flats",
    }
]

const Products = () => {

    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* header section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-sm text-primary">Top Selling Products for you</p>
                    <h1 className="text-3xl font-bold" 
                        >Products</h1>
                    <p className="text-xs text-gray-400" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit </p>
                </div>
                {/* body section */}
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
                        {/* card section */}
                        {
                            data.map((product) => (
                                <div
                                    data-aos="fade-up"
                                    data-aos-delay={product.aosDelay}

                                    key={product.id} className=" px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
                                    {/* Card Image */}
                                    <img className="w-[300px] bg-gray-400 rounded-2xl" src={product.img} alt="" />
                                    {/* Card Heading */}
                                    <div className="space-y-2">
                                        <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg pt-3">{product.title}</h2>
                                        {/* rating  */}
                                        <div className="flex gap-1 text-primary py-3">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />

                                        </div>
                                    </div>
                                    {/* Price and action button */}
                                    <div className="mt-5 flex justify-between items-center font-medium pb-3">

                                        <h2 className="md:text-xl text-gray-800">${product.newPrice}</h2>
                                        <h2 className="md:text-xl text-gray-800 line-through">{product.prevPrice}</h2>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="flex justify-center items-center my-7">
                        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded">View All Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;