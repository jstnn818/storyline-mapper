import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { MdEdit, MdDelete  } from "react-icons/md"
import { SlOptionsVertical } from "react-icons/sl"

import { MapContainer, ImageOverlay, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, CRS, LatLngBounds } from 'leaflet'
import "leaflet/dist/leaflet.css"

import MapFormEdit from "../forms/MapFormEdit"

import { Map } from '../interfaces'

const MapPage = () => {

    const navigate = useNavigate()

    const [ map, setMap ] = useState<Map | null>(null)
    const { id } = useParams()
    const [ options, setOptions ] = useState(false)
    const [ form, setForm ] = useState(false)

    useEffect(() => {
        const fetchMap = async () => {
            const response = await fetch(`/map/${id}`)
            const json = await response.json()
            if (response.ok) {
                setMap(json)
            }
        }
        fetchMap()
    }, [id])

    const toggleOptions = () => {
        setOptions(!options)
    }

    const toggleForm = () => {
        setForm(!form)
    }

    const handleDelete = async () => {
        const response = await fetch(`/map/${id}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            navigate('/maps')
        }
    }

    const bounds = new LatLngBounds([0, 0], [1731, 728])

    const positions: [number, number][] = [
        [51.505, -0.09],
        [48.85, 2.352],
        [46.86, 103.846],
        [38.907, -77.036]
    ]

    return (
        <div className="flex fixed w-screen mt-16">
            <div className="w-3/4 z-10">
                <MapContainer
                    crs={CRS.Simple}
                    className="markercluster-map"
                    center={[865, 364]}
                    zoom={1}
                    maxZoom={4}
                    minZoom={-2}
                >
                    <ImageOverlay
                        url={`/static/${map?.filepath}`}
                        bounds={bounds}
                    />
                </MapContainer>
                {/*<MapContainer
                    className="markercluster-map"
                    center={[51.0, 19.0]}
                    zoom={4}
                    maxZoom={18}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {positions && positions.map(position => (
                        <Marker 
                        position={position} 
                        icon={new Icon({
                            iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png", 
                            iconSize: [25, 41], 
                            iconAnchor: [12, 41],
                            popupAnchor: [0, -40]
                        })}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>*/}
            </div>
            <div className="w-1/4">
                <h1 className="flex justify-center font-bold text-2xl p-5 text-white bg-gray-700"> {map?.name} </h1>
                
                <div className="absolute top-0 right-0 text-white"> 
                    <button onClick={toggleOptions} className="absolute top-0 right-0 m-3">
                        <SlOptionsVertical />
                    </button>
                    {options && (
                        <div className="mt-10 mr-1 flex flex-col text-white text-center">
                            <button onClick={toggleForm} className="flex flex-row justify-center bg-gray-900 py-2 px-5 hover:bg-gray-700 w-full mb-1">     
                                Edit
                                <div className="mt-1 ml-1">
                                    <MdEdit /> 
                                </div>
                            </button>
                            <button onClick={handleDelete} className="flex flex-row justify-center bg-gray-900 py-2 px-5 hover:bg-gray-700 w-full"> 
                                Delete
                                <div className="mt-1 ml-1">
                                    <MdDelete /> 
                                </div>
                            </button>
                        </div>
                    )}
                </div>
                <p className="p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
            
            

            {form && id && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleForm}></div>
                    <MapFormEdit id={id}/>
                </div>
            )}    
        </div>
    )
}
export default MapPage