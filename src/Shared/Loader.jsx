import { ImSpinner9 } from "react-icons/im";


const Loader = () => {
    return (
        <div>
            <div className="container flex justify-center items-center min-h-[calc(100vh-300px)]">
            <ImSpinner9 className="animate-spin text-5xl text-primary"/>
            </div>
        </div>
    );
};

export default Loader;