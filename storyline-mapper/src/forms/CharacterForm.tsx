import { useState } from "react"

const CharacterForm = ({}) => {
    const [ name, setName ] = useState("")
    const [ gender, setGender ] = useState("")

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            name,
            gender,
        }
        const response = await fetch('/character', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json()
        console.log(json)
        if (response.ok) {
            window.location.reload()
        }
        
    }

    return (
        <form className="submit-form" onSubmit={onSubmit}>
            <div className="text-center text-lg">
                <h1> Create Character </h1>
            </div>
            <div>
                <label className="label-form" htmlFor="name"> Name: </label>
                <input className="input-form"
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label className="label-form" htmlFor="gender"> Gender: </label>
                <input className="input-form"
                    type="text" 
                    id="gender" 
                    value={gender} 
                    onChange={(e) => setGender(e.target.value)}
                />
            </div>
            <div className="text-center">
                <button className="button-form" type="submit"> Submit </button>
            </div>
            
        </form>
    )
}
export default CharacterForm