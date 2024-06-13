import { useState, useEffect } from 'react'

import Sidebar from "../components/Sidebar"
import ItemList from "../components/ItemList"
import { Map } from '../interfaces'

const MyMaps = () => {

    const [maps, setCharacters] = useState<Map[]>([])

    useEffect(() => {
        const fetchMaps = async () => {
            const response = await fetch('/map')
            const json = await response.json()
            if (response.ok) {
                setCharacters(json)
            }
        }
        fetchMaps()
    }, [])

    return (
        <div>
            <Sidebar type="map"/>
            <div className="flex justify-center mt-16 ml-64">
                <ItemList type="map" list={maps}/>
            </div>
        </div>
    )
}
export default MyMaps