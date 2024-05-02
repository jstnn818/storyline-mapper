import { IconType } from "react-icons"
import { FaMapMarkedAlt, FaUserCircle } from "react-icons/fa"

interface ItemListProps {
    type: string
}

interface ItemProps {
    item: string
    icon: IconType
}

const ItemList = ({ type }: ItemListProps) => {

    const exampleList: string[] = []
    for (let i = 0; i < 10; i++){
        exampleList.push(type + "_" + i.toString())
    }

    let FileIcon: IconType = type == "map" ? FaMapMarkedAlt : FaUserCircle 

    return (
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 m-4">
            {exampleList && exampleList.map(item => (
                <Item key={item} item={item} icon={FileIcon}/>
            ))}
        </div>
    )
}

const Item = ({ item, icon }: ItemProps) => {
    const Icon = icon
    return (
        <div className="flex flex-col m-4 w-16">
            <Icon size={64} />
            <p className="text-center">{ item }</p> 
        </div>
    )
}

export default ItemList