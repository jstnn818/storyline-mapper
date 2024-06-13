import { IconType } from "react-icons"
import { FaMapMarkedAlt, FaUserCircle } from "react-icons/fa"
import { Link } from "react-router-dom"

import { Character, Map } from '../interfaces'

interface ItemListProps {
    type: string
    list: Character[] | Map[]
}

interface ItemProps {
    item: Character | Map
    icon: IconType
}

const ItemList = ({ type, list }: ItemListProps) => {

    let FileIcon: IconType = type == "map" ? FaMapMarkedAlt : FaUserCircle
    let FilePath: string = type == "map" ? "maps" : "characters"

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 m-4">
            {list && list.map(item => (
                <Link key={item.id} to={'/' + FilePath + '/' + item.id}>
                    <Item item={item} icon={FileIcon}/>
                </Link>
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