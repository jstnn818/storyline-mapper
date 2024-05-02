import Sidebar from "../components/Sidebar"
import ItemList from "../components/ItemList"

const MyCharacters = () => {
    return (
        <div>
            <Sidebar type="character"/>
            <div className="flex justify-center mt-16 ml-64">
                <ItemList type="character"/>
            </div>
        </div>
    )
}
export default MyCharacters