import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Loader from "../../Shared/Loader";
import { Helmet } from "react-helmet-async";


const ProductDetails = () => {
  const { id } = useParams();
 const [product, setProduct] = useState({});
 
  const [loading, setLoading] = useState(false)
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    setLoading(true)
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const singleProduct = data?.find(item => item?.id===parseInt(id))
        console.log(singleProduct);
        setProduct(singleProduct)
        setLoading(false)


      })
      fetchRelatedProducts();
  }, [id])
  const fetchRelatedProducts = () => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        const related = data.filter(item => item.category === product.category && item.id !== parseInt(id));
        setRelatedProducts(related);
      });
  };
  if (loading) return <Loader />
  return (
    <div className="container">
       <Helmet><title>Shopsy || {`product.title`}</title></Helmet>
       <h2>{product.title}</h2>
       {/* Display related products */}
      <div>
        <h3 className="text-3xl font-semibold">Related Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 container mt-16 my-16">
          {relatedProducts.map(relatedProduct => (
            <div key={relatedProduct.id}>
              <h4>{relatedProduct.title}</h4>
              {/* Display other related product details as needed */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails