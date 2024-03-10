import { TbCirclesRelation } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleRoom } from "../../api/products";
import Product from "../../Components/Products/Product";
import Loader from "../../Shared/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
useEffect(() => {
      const fetchProductAndRelated = async () => {
          const { mainProduct, relatedProducts } = await getSingleRoom(id);
          setProduct(mainProduct);
          setRelatedProducts(relatedProducts);
      };

      fetchProductAndRelated();
  }, [id]);

  if (!product) {
      return <Loader/>;
  }
  return (
    <div className="container">
      <Helmet><title>{`Shopsy || ${product.title}`}</title></Helmet>
      {/* Display related products */}
      <h2>{product.title}</h2>
      <h2>{product.category}</h2>
      <div>
        <h3 className="text-3xl  font-semibold mt-6 flex gap-3 items-center"><span className="leading-tight text-primary">Related</span> Products <TbCirclesRelation className="text-orange-400" /></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 container mt-16 my-16">
          {
            relatedProducts?.map(relatedProduct => <Product key={relatedProduct._id} product={relatedProduct}/>)
          }

        </div>
      </div>
    </div>
  )
}

export default ProductDetails;



