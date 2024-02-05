import FirstSection from "../../Components/About/FirstSection";
import LogoSection from "../../Components/About/LogoSection";
import SecondParalax from "../../Components/About/SecondParalax";


const About = () => {
    return (
        <div className="mb-10">
            <FirstSection/>
            <LogoSection/>
            {/* second paralax */}
            <SecondParalax/>
           
        </div>
    );
};

export default About;