import { useEffect, useState } from "react";
import FirstSection from "../../Components/Products/FirstSection";
import Product from "../../Components/Products/Product";
import Companies from "../../Components/Products/Companies";


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <FirstSection />
            <Companies/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 container mt-16 my-16">
                {
                    products.map(product => <Product key={product.id} product={product} />)
                }

            </div>
        </div>
    );
};

export default Products;