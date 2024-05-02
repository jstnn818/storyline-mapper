import Sidebar from "../components/Sidebar"
import ItemList from "../components/ItemList"

const MyMaps = () => {
    return (
        <div>
            <Sidebar type="map"/>
            <div className="flex justify-center mt-16 ml-64">
                <ItemList type="map"/>
            </div>
        </div>
    )
}
export default MyMaps