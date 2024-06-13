import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { MdEdit, MdDelete  } from "react-icons/md"
import { SlOptionsVertical } from "react-icons/sl"

import ImageFiller from 'react-image-filler'
import CharacterFormEdit from "../forms/CharacterFormEdit"

import { Character } from '../interfaces'

const CharacterPage = () => {

    const navigate = useNavigate()

    const [ character, setCharacter ] = useState<Character | null>(null)
    const { id } = useParams()
    const [ options, setOptions ] = useState(false)
    const [ form, setForm ] = useState(false)

    useEffect(() => {
        const fetchCharacter = async () => {
            const response = await fetch(`/character/${id}`)
            const json = await response.json()
            if (response.ok) {
                setCharacter(json)
            }
        }
        fetchCharacter()
    }, [id])

    const toggleOptions = () => {
        setOptions(!options)
    }

    const toggleForm = () => {
        setForm(!form)
    }

    const handleDelete = async () => {
        const response = await fetch(`/character/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            navigate('/characters')
        }
    }

    return (
        <div className="relative w-screen flex justify-center mt-32">
            <div className="relative w-4/6 shadow-lg">

                <h1 className="flex justify-center font-bold text-2xl p-5 text-white bg-gray-700"> {character?.name} </h1>
                
                <div className="flex w-full">
                    <ImageFiller width={200} height={200} />
                    <div className="flex flex-col">
                        <p className="p-5"> {character?.gender} </p>
                        <p className="p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    </div>
                </div>

                <button onClick={toggleOptions} className="absolute top-0 right-0 m-3 text-white"> 
                    <SlOptionsVertical />
                </button>
            </div>

            <div className="relative w-0 h-0">
                {options && (
                    <div className="absolute top-0 left-3 flex flex-col text-white text-center">
                        <button onClick={toggleForm} className="flex flex-row justify-center bg-gray-900 py-2 px-5 hover:bg-gray-700 w-full border border-1 border-white">     
                            Edit
                            <div className="mt-1 ml-1">
                                <MdEdit /> 
                            </div>
                        </button>
                        <button onClick={handleDelete} className="flex flex-row justify-center bg-gray-900 py-2 px-5 hover:bg-gray-700 w-full border border-1 border-white"> 
                            Delete
                            <div className="mt-1 ml-1">
                                <MdDelete /> 
                            </div>
                        </button>
                    </div>
                )}
            </div>

            
            {form && id && (
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleForm}></div>
                    <CharacterFormEdit id={id}/>
                </div>
            )}    
        </div>
    )
}
export default CharacterPage