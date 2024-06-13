import { useState, useEffect } from "react"

type Props = {
    id: string
}

const MapFormEdit = ({ id }: Props) => {
    const [ name, setName ] = useState("")

    useEffect(() => {
        const fetchMap = async () => {
            const response = await fetch(`/map/${id}`)
            const json = await response.json()
            if (response.ok) {
                setName(json.name)
            }
        }
        fetchMap()
    }, [id])

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const data = {
            name,
        }
        const response = await fetch('/map/' + id, {
            method: 'PATCH',
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
                <h1> Edit Map </h1>
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
            <div className="text-center">
                <button className="button-form" type="submit"> Submit </button>
            </div>
        </form>
    )
}
export default MapFormEdit