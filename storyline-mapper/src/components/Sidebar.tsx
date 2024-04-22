import { IconManifestType, IconType } from "react-icons"
import { IoMapSharp } from "react-icons/io5"

interface SidebarIconProps {
    icon: IconType
    text: string
}

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col bg-gray-900 text-white shadow-lg">
            <SidebarIcon icon={IoMapSharp} text="My Maps" />
        </div>
    )
}

const SidebarIcon = ({ icon, text }: SidebarIconProps) => {
    const Icon = icon
    return (
        <div className="sidebar-icon group">
            <Icon size={28}/>
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}
export default Sidebar