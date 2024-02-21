import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }


    return (
        <>

            <div className="mt-10">
                <Link to="/"> <h2 className="text-xl font-semibold px-4 py-2 md:w-1/5 mb-3 lg:w-1/6 rounded-lg ml-3 flex gap-2 items-center cursor-pointer hover:bg-primary/60 hover:text-white">Back to Home <FaArrowLeft className="text-primary mr-4 " /></h2></Link>
                <div className="p-8 space-y-3 rounded-xl bg-white max-w-lg  mx-auto font-sans border border-primary">

                    <h1 className="text-3xl font-bold text-center text-primary">Welcome Back Shopsy</h1>
                    <div>
                        {/* Input fields and the form started */}
                        <form onSubmit={handleSubmit} action="" className="space-y-6">
                            {/* email input */}
                            <div className="space-y-2 text-sm">
                                <label htmlFor="username" className="block ">
                                    Your Email
                                </label>
                                <input type="email" name="email" id="email" placeholder="Username" className="w-full px-4 py-3 rounded-md border border-primary/60 focus:outline-none   " />
                            </div>
                            {/* password input */}
                            <div className="space-y-2 text-sm">
                                <label htmlFor="password" className="block ">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-primary/60 focus:outline-none " />
                                {/* forget password */}
                                <div className="flex justify-end text-xs ">
                                    <a href="#" className="hover:underline hover:text-primary">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>
                            {/* Sign in Button */}
                            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-primary text-white border-y-4 duration-500 overflow-hidden focus:border-primary/80 z-50 group">
                                Log In
                                
                            </button>
                        </form>
                        <div className="flex items-center pt-4 space-x-2">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <p className="text-sm text-gray-600">Login with social accounts</p>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>
                        {/* Social icons */}
                        <div className="flex justify-center space-x-4 my-2">
                            <button aria-label="Log in with Google" className="w-full md:w-1/2 border gap-2 border-primary py-2 flex rounded-full justify-center items-center">
                                <FcGoogle className="text-2xl"/> Continue With Google
                            </button>
                            
                          
                        </div>
                        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
                            Don't have an account ?
                           <Link to="/register"> <p href="#" className="underline cursor-pointer hover:text-primary">
                                Sign up
                            </p></Link>
                        </p>
                    </div>
                </div>
            </div>



        </>

    );
};

export default Login;