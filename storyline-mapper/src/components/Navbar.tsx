import { IconType } from "react-icons"
import { IoHome, IoMapSharp, IoLogInOutline } from "react-icons/io5"
import { RxDividerVertical } from "react-icons/rx"
import { GiCharacter } from "react-icons/gi"

import { Link } from 'react-router-dom'

interface NavbarIconProps {
    icon: IconType
    text: string
    path: string
}

interface UserIconProps {
    icon: IconType
    divider: IconType
    username: string
}

const Navbar = () => {
    return (
        <div className="fixed top-0 h-16 w-screen m-0
         bg-gray-900 text-white shadow-lg">
            <div className="flex flex-row absolute left-5 gap-5">
                <NavbarIcon icon={IoHome} text="Home" path="/" />
                <NavbarIcon icon={IoMapSharp} text="My Maps" path="/maps" />
                <NavbarIcon icon={GiCharacter} text="My Characters" path="/characters" />
            </div>
            <div className="navbar-user">
                <UserIcon icon={IoLogInOutline} divider={RxDividerVertical} username="Login" />
            </div>
        </div>
    )
}

const NavbarIcon = ({ icon, text, path }: NavbarIconProps) => {
    const Icon = icon
    return (
        <Link to={path} className="navbar-icon group">
            <Icon size={28}/>
            <span className="navbar-tooltip group-hover:scale-100">
                {text}
            </span>
        </Link>
    )
}

const UserIcon = ({ icon, divider, username }: UserIconProps) => {
    const Icon = icon
    const Divider = divider
    return (
        <div className="flex flex-row justify-center">
            <Icon size={28}/>
            <Divider size={28}/>
            <p className="mt-0.5"> {username} </p>
        </div>
    )
}

export default Navbar