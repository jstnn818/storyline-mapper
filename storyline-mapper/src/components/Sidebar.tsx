import { IconType } from "react-icons"
import { TfiFiles } from "react-icons/tfi"
import { MdFavoriteBorder } from "react-icons/md"
import { FaRegTrashAlt } from "react-icons/fa"

interface SidebarProps {
    type: string
}

interface SidebarIconProps {
    icon: IconType
    text: string
}

const Sidebar = ({ type }: SidebarProps) => {

    const AllLabal: string = type == "map" ? "All Maps" : "All Characters"

    return (
        <div className="fixed top-16 left-0 h-screen w-64 m-0 
        flex flex-col content-start bg-gray-700 text-white shadow-lg">
            <SidebarIcon icon={TfiFiles} text={AllLabal} />
            <SidebarIcon icon={MdFavoriteBorder} text="Favorites" />
            <SidebarIcon icon={FaRegTrashAlt} text="Trash" />
        </div>
    )
}

const SidebarIcon = ({ icon, text }: SidebarIconProps) => {
    const Icon = icon
    return (
        <button className="flex flex-row bg-gray-500 p-2 border-b border-white hover:bg-gray-600">
            <Icon size={28} className="mx-3"/>
            <span className="hover:text-gray">
                {text}
            </span>
        </button>
    )
}
export default Sidebar