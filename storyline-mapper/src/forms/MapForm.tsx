import { useState } from "react"

const MapForm = () => {
    const [ name, setName ] = useState("")
    const [ file, setFile ] = useState<File | null>(null)
    const [ filename, setFileName ] = useState("")

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!file)
            return

        const data = new FormData()
        data.append('name', name)
        data.append('file', file)
        data.append('filename', filename)

        const response = await fetch('/map', {
            method: 'POST',
            body: data,
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
                <h1> Create Map </h1>
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
                <label className="label-form" htmlFor="file"> File: </label>
                <input className="input-form"
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
            </div>
            <div>
                <label className="label-form" htmlFor="filename"> File Name: </label>
                <input className="input-form"
                    type="text" 
                    id="filename" 
                    value={filename} 
                    onChange={(e) => setFileName(e.target.value)}
                />
            </div>
            <div className="text-center">
                <button className="button-form" type="submit"> Submit </button>
            </div>
            
        </form>
    )
}
export default MapForm