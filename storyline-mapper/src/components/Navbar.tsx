import { IconType } from "react-icons"
import { IoHome, IoMapSharp } from "react-icons/io5"
import { GiCharacter } from "react-icons/gi"

interface NavbarIconProps {
    icon: IconType
    text: string
}

const Navbar = () => {
    return (
        <div className="fixed top-0 h-16 w-screen m-0
         bg-gray-900 text-white shadow-lg">
            <div className="flex flex-row absolute left-5 gap-5">
                <NavbarIcon icon={IoHome} text="Home" />
                <NavbarIcon icon={IoMapSharp} text="My Maps" />
                <NavbarIcon icon={GiCharacter} text="My Characters" />
            </div>
        </div>
    )
}

const NavbarIcon = ({ icon, text }: NavbarIconProps) => {
    const Icon = icon
    return (
        <div className="navbar-icon group">
            <Icon size={28}/>
            <span className="navbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}
export default Navbar