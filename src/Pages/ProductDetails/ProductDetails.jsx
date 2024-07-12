import { TbCirclesRelation } from "react-icons/tb";
import { Helmet } from "react-helmet-async";
import {useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getSingleRoom } from "../../api/products";
import Product from "../../Components/Products/Product";
import Loader from "../../Shared/Loader";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import PrimaryButton from "../../Components/Button/PrimaryButton";
const ProductDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  
  // State for handeling radio button
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('m');
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
  const handleShowAll = () => {
    setShowAll(true); // Update state to show all related products
  };
  
  return (
    <div className="container">
      <Helmet><title>{`Shopsy || ${product.title}`}</title></Helmet>
      {/* Display related products */}
    
      <div className="flex flex-wrap mt-10 gap-4">
  <div className="flex-1 min-w-[200px]">
    <img src={product?.img} alt="" className="w-full h-full object-cover" />
  </div>
  <div className="flex-1 min-w-[300px]">
    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">{product.title}</h1>
    
    <Rating
      style={{ maxWidth: 160, color: '#fbd41f' }} // Adjust the color here
      value={3}
      readOnly
    />
    <div className=" text-3xl py-3 mb-5">
    <span>${product.newPrice}</span>
    <span className="line-through ml-4">{product.prevPrice}</span>
    </div>
    <PrimaryButton buttonText={"Add to card"}/>
  </div>
</div>
    
     
      <div>
        <h3 className="text-3xl  font-semibold mt-6 flex gap-3 items-center"><span className="leading-tight text-primary">Related</span> Products <TbCirclesRelation className="text-orange-400" /></h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5 container mt-16 my-16">
          {/* Render either all related products or just a subset based on the state */}
          {showAll
            ? relatedProducts?.map((relatedProduct) => (
                <Product key={relatedProduct._id} product={relatedProduct} />
              ))
            : relatedProducts.slice(0, 4).map((relatedProduct) => (
                <Product key={relatedProduct._id} product={relatedProduct} />
              ))}
        </div>
        {/* Show All button */}
        {!showAll && (
          <div className="flex justify-center items-center my-7">
          <button onClick={handleShowAll} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded">View All Products</button>
      </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails;



