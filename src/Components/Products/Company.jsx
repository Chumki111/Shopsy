import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";


function Company({label,selected}) {
    const [params,setParams] = useSearchParams();
    const navigate = useNavigate();
    const handleClick =()=>{
      // console.log(label);
      let currentQuery = {};
      if(params){
        currentQuery = qs.parse(params.toString());
        const updatedQuery = {...currentQuery,company:label}
        const url = qs.stringifyUrl({
          url:'/products',
          query:updatedQuery
        })
        navigate(url)
      }
    }
    params.get('category')
  return (
    <div className="mx-6">
         <div onClick={handleClick}
    className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800 dark:text-primary dark:border-b-primary' :''}`}>
       
        <div className="text-2xl font-medium">
        {label}
        </div>
    </div>
    </div>
  )
}

export default Company