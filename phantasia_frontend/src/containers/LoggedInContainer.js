import NavbarButton from "../components/shared/NavbarButton";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoutModal from "../modals/LogoutModal";

const LoggedInContainer = ({ children, currentActiveScreen }) => {
    const [logoutModalOpen, setLogoutModalOpen] = useState(false);

    return (
        <div className="w-full h-full flex flex-col">
            {logoutModalOpen && <LogoutModal closeModal={() => { setLogoutModalOpen(false) }} />}
            <div className="w-full h-20 bg-white flex p-3 shadow-xl justify-between">
                <div className="h-full flex space-x-3 items-center">
                    <img src="/logo.png" className="h-16 w-16" />
                    <Link className="h-full" to="/home">
                        <NavbarButton name={"Home"} active={currentActiveScreen === "home"} />
                    </Link>
                    <Link className="h-full" to="/explore">
                        <NavbarButton name={"Explore"} active={currentActiveScreen === "explore"} />
                    </Link>
                    <Link className="h-full" to="/create">
                        <NavbarButton name={"Create"} active={currentActiveScreen === "create"} />
                    </Link>
                    <Link className="h-full" to="/ai">
                        <NavbarButton name={"AI Image-Generator"} active={currentActiveScreen === "ai"} />
                    </Link>
                </div>

                <div className="justify-center pr-16 flex items-center space-x-12">
                    <Link to="/mypins">
                        <Icon className="cursor-pointer" icon="solar:gallery-circle-bold" fontSize={30} color="gray" />
                    </Link>
                    <Link to="/liked">
                        <Icon className="cursor-pointer" icon="mdi:heart" fontSize={30} color="gray" />
                    </Link>
                    <Link to="/saved">
                        <Icon className="cursor-pointer" icon="ic:round-collections" fontSize={30} color="gray" />
                    </Link>
                    <Icon className="cursor-pointer" icon="material-symbols:logout" fontSize={30} color="gray" onClick={() => setLogoutModalOpen(true)} />
                </div>
            </div>
            <div className="pt-12 p-5 flex flex-col items-center">
                {children}
            </div>

        </div>
    );
}

export default LoggedInContainer;