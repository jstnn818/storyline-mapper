import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ImageFiller from 'react-image-filler'

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
        <div className="w-screen flex justify-center mt-32">
            <div className="w-4/6 shadow-lg">

                <h1 className="flex justify-center font-bold text-2xl p-5 text-white bg-gray-700"> {character?.name} </h1>
                
                <div className="flex w-full">
                    <ImageFiller width={200} height={200} />
                    <div className="flex flex-col">
                        <p className="p-5"> {character?.gender} </p>
                        <p className="p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CharacterPage