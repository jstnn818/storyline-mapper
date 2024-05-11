import { IconType } from "react-icons"
import { TfiFiles } from "react-icons/tfi"
import { MdFavoriteBorder } from "react-icons/md"
import { FaRegTrashAlt } from "react-icons/fa"
import { GoPlus } from "react-icons/go"
import { useState } from "react"

import CharacterForm from "../forms/CharacterForm"

interface SidebarProps {
    type: string
}

interface SidebarIconProps {
    icon: IconType
    text: string
}



const Sidebar = ({ type }: SidebarProps) => {

    const [ form, setForm ] = useState(false)

    const toggleForm = () => {
        setForm(!form)
    }

    const SidebarIcon = ({ icon, text }: SidebarIconProps) => {
        const Icon = icon
        return (
            <div className="flex flex-row relative
             bg-gray-500 p-2 border-b border-white hover:bg-gray-600">
                <Icon size={28} className="mx-3"/>
                <span className="hover:text-gray">
                    {text}
                </span>
            </div>
        )
    }

    const AllLabel: string = type == "map" ? "All Maps" : "All Characters"
    return (
        <div>
            <div className="fixed top-16 left-0 h-screen w-64 m-0 
            flex flex-col content-start bg-gray-700 text-white">
                <button onClick={toggleForm}>
                    <SidebarIcon icon={GoPlus} text="Create New" />
                </button>
                <SidebarIcon icon={TfiFiles} text={AllLabel} />
                <SidebarIcon icon={MdFavoriteBorder} text="Favorites" />
                <SidebarIcon icon={FaRegTrashAlt} text="Trash" />
            </div>
            {form && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleForm}></div>
                    <CharacterForm />
                </div>
            )}
        </div>
    )
    
}


export default Sidebar