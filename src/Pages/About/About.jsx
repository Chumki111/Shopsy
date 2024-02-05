
import Count from "../../Components/About/CountUp";
import FirstSection from "../../Components/About/FirstSection";
import LogoSection from "../../Components/About/LogoSection";
import SecondParalax from "../../Components/About/SecondParalax";
import SecondSection from "../../Components/About/SecondSection";


const About = () => {
    
    return (
        <div className="mb-10">
            <FirstSection/>
            <Count/>
            {/* second section */}
            <SecondSection/>
            <LogoSection/>
            {/* second paralax */}
            <SecondParalax/>
            
            
            
           
        </div>
    );
};

export default About;