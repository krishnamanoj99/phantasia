import NavbarButton from "../components/shared/NavbarButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import HomeCard from "../components/shared/HomeCard";

const HomeComponent = () => {
    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="w-full h-20 bg-white flex p-3 shadow-xl justify-between">
                <div className="h-full flex space-x-6 items-center">
                    <img src="/logo.png" className="h-14 w-14" />
                    <NavbarButton name={"Home"} active={true} />
                </div>

                <div className="justify-center pr-16 flex items-center space-x-12">
                    <Link to="/login" className="h-full">
                        <NavbarButton name={"Login"} />
                    </Link>
                    <Link to="/signup" className="h-full">
                        <NavbarButton name={"Signup"} />
                    </Link>
                </div>

            </div>
            
            <div className={`h-full w-full bg-gradient-to-br from-violet-600 to-violet-100 flex flex-col justify-center items-center space-y-3`}>
                <span className="font-semibold text-4xl text-white">Uncover hidden gems and trending topics.</span>
                <span className="font-semibold text-4xl text-white">Explore <span className="font-bold text-5xl text-englishviolet">Phantasia </span> now!</span>
                
            </div> 

        </div>
    );
}

export default HomeComponent;