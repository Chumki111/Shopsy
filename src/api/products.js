import axiosSecure from "."

// get all products
export const getAllProducts= async() =>{
    const{data} = await axiosSecure('/products');
    return data;
}

// get single room
export const getSingleRoom=async(id)=>{
    const{data}=await axiosSecure(`/product/${id}`);
    return data;
}