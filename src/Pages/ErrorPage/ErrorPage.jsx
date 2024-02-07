import { Link } from 'react-router-dom';
import PrimaryButton from '../../Components/Button/PrimaryButton';
import errorImage from '../../assets/404.png'
const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
           <div className="text-center">
            <img src={errorImage} alt="" />
              <Link to='/'><PrimaryButton buttonText="Back To Home"/></Link>
           </div>
        </div>
    );
};

export default ErrorPage;