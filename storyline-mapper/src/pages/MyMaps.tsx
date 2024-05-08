import { useState, useEffect } from 'react'

import Sidebar from "../components/Sidebar"
import ItemList from "../components/ItemList"
import { Character } from '../interfaces'

const MyMaps = () => {

    const [characters, setCharacters] = useState<Character[]>([])

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('/character')
            const json = await response.json()
            if (response.ok) {
                setCharacters(json)
            }
        }
        fetchCharacters()
    }, [])

    return (
        <div>
            <Sidebar type="map"/>
            <div className="flex justify-center mt-16 ml-64">
                <ItemList type="map" list={characters}/>
            </div>
        </div>
    )
}
export default MyMaps