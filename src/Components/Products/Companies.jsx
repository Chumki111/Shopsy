import { useSearchParams } from "react-router-dom";
import Company from "./Company";
import { products } from "./ProductData";


function Companies() {
    const [params,setParams] = useSearchParams();
    const company = params.get('company');
    // console.log(company);
    

  return (
    <div className=""> 
     <div className="py-4 flex justify-center items-center overflow-x-auto container">
        {products?.map(item => <Company key={item.company} label={item.company} selected={company === item.company}/>)}
        </div>
        </div>
  )
}

export default Companies