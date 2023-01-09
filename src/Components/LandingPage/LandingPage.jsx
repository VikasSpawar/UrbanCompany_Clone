import Appliances from "./Appliances";
import Cleening from "./Cleening";
import Descrimination from "./Descrimination";
import HomeRepair from "./HomeRepair";
import HomeServices from "./HomeServices";
import Insurance from "./Insurance";
import Luxury from "./Luxury";
import NewCategory from "./NewCategory";
import Salon from "./Salon";
import Services from "./Services";
import SkillIndia from "./SkillIndia";
import "./Style.css";

const LandingPage = ()=>{
    return(
        <div>
            <h1>Home Page</h1>
            <HomeServices />
            <div className="space"></div>
            <Services />
            <div className="space"></div>
            <NewCategory />
            <div className="space"></div>
            <Appliances />
            <div className="space"></div>
            <Salon />
            <div className="space"></div>
            <Cleening />
            <div className="space"></div>
            <Luxury />
            <div className="space"></div>
            <HomeRepair />
            <div className="space"></div>
            <Insurance/>
            <div className="space"></div>
            <Descrimination/>
            <div className="space"></div>
            <SkillIndia/>
        </div>
    );
}

export default LandingPage;