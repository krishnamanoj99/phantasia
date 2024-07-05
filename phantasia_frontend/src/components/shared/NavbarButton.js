import { Link } from "react-router-dom";

const NavbarButton = ({name, active}) => {
    return (
        <div className={`h-full px-4 font-semibold rounded-full flex items-center justify-center ${active ? "bg-darkpurple text-white" : "bg-white"} cursor-pointer hover:bg-lilac`}>
            {name}
        </div>
    )
}

export default NavbarButton;
