import { FaArrowLeft } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-10">
      <Link to="/"> <h2 className="text-xl font-semibold px-4 py-2 md:w-1/5 mb-3 lg:w-1/6 rounded-lg ml-3 flex gap-2 items-center cursor-pointer hover:bg-primary/60 hover:text-white">Back to Home <FaArrowLeft className="text-primary mr-4 " /></h2></Link>
      <div className="p-8 space-y-3 rounded-xl bg-white max-w-lg  mx-auto font-sans border border-primary">

        <h1 className="text-3xl font-bold text-center text-primary mb-4">Welcome Back Shopsy</h1>
        <div>
          {/* Input fields and the form started */}
          {/* name input */}
          <form action="" className="space-y-6">
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block ">
                Your Name
              </label>
              <input type="text" name="name" id="name" placeholder="Write Your Name" className="w-full px-4 py-3 rounded-md border border-primary/60 focus:outline-none placeholder:italic" />
            </div>
            {/* email input */}
            <div className="space-y-2 text-sm">
              <label htmlFor="username" className="block ">
                Your Email
              </label>
              <input type="email" name="email" id="email" placeholder="Write Your Email" className="w-full px-4 py-3 rounded-md border border-primary/60 focus:outline-none placeholder:italic  " />
            </div>
            {/* password input */}
            <div className="space-y-2 text-sm">
              <label htmlFor="password" className="block ">
                Password
              </label>
              <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-primary/60 focus:outline-none placeholder:italic" />

            </div>
            {/* image input */}
            <div className="space-y-2 text-sm flex justify-center">
              <div className="shrink-0">
                <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
              </div>
              <label htmlFor="password" className="block ">
               
              </label>
              <input type="file" name="image" id="image" placeholder="" className="w-full px-4 py-3 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 placeholder:italic file:text-primary hover:file:bg-violet-100" />

            </div>
            {/* Sign in Button */}
            <button className="text-lg rounded-xl relative p-[10px] block w-full bg-primary text-white border-y-4 duration-500 overflow-hidden focus:border-primary/80 z-50 group">
              Sign Up

            </button>
          </form>
          <div className="flex items-center pt-4 space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          {/* Social icons */}
          <div className="flex justify-center space-x-4 my-3">
            <button aria-label="Log in with Google" className="w-full md:w-1/2 border gap-2 border-primary py-2 flex rounded-full justify-center items-center">
              <FcGoogle className="text-2xl" /> Continue With Google
            </button>


          </div>
          <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
            Already have an account ?
            <Link to="/login"> <p href="#" className="underline cursor-pointer hover:text-primary">
              Sign In
            </p></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;