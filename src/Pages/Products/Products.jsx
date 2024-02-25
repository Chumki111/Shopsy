import { useEffect, useState } from "react";
import FirstSection from "../../Components/Products/FirstSection";
import Product from "../../Components/Products/Product";
import Companies from "../../Components/Products/Companies";
import { useSearchParams } from "react-router-dom";
import Headings from "../../Shared/Headings";
import Loader from "../../Shared/Loader";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [params, setParams] = useSearchParams();
    const company = params.get('company');
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        // setLoading(true)
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                if (company) {
                    const filtered = data.filter(product => product.company === company)
                    setProducts(filtered)
                }
                else {
                    setProducts(data)
                }
                // setLoading(false)


            })
    }, [company])
    // if (loading) return <Loader />
    return (
        <div>
            <FirstSection />
            <Companies />
            {
                products && products.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 container mt-16 my-16">
                    {
                        products.map(product => <Product key={product.id} product={product} />)
                    }

                </div> : <div className="my-16">
                    <Headings center={true} title="No Products Available In This Category" subtitle="Please Select Other Category" />
                </div>
            }
        </div>
    );
};

export default Products;