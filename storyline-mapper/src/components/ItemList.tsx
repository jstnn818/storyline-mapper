import { IconType } from "react-icons"
import { FaMapMarkedAlt, FaUserCircle } from "react-icons/fa"

import { Character } from '../interfaces'

interface ItemListProps {
    type: string
    list: Character[]
}

interface ItemProps {
    item: Character
    icon: IconType
}

const ItemList = ({ type, list }: ItemListProps) => {

    let FileIcon: IconType = type == "map" ? FaMapMarkedAlt : FaUserCircle 

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 m-4">
            {list && list.map(item => (
                <Item key={item._id} item={item} icon={FileIcon}/>
            ))}
        </div>
    )
}

const Item = ({ item, icon }: ItemProps) => {
    const Icon = icon
    return (
        <div className="flex flex-col m-4 w-16">
            <Icon size={64} />
            <p className="text-center leading-5">{ item.name }</p> 
        </div>
    )
}

export default ItemList