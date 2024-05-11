import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { Character } from '../interfaces'

const CharacterPage = () => {

    const [ character, setCharacter ] = useState<Character | null>(null)
    const { id } = useParams()

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch(`/character/${id}`)
            const json = await response.json()
            if (response.ok) {
                setCharacter(json)
            }
        }
        fetchCharacters()
    }, [id])

    return (
        <div className="flex justify-center mt-16">
            <div className="w-4/6">
                {/* Title */}
                <h1 className="flex justify-center font-bold text-2xl p-5 text-red-700"> {character?.name} </h1>

                <p className="p-5"> {character?.gender} </p>
            </div>
        </div>
    )
}
export default CharacterPage