import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import "leaflet/dist/leaflet.css"

const MapPage = () => {

    const position: [number, number] = [51.505, -0.09]

    return (
        <div className="flex fixed w-screen mt-16">
            <MapContainer
                className="markercluster-map"
                center={[51.0, 19.0]}
                zoom={4}
                maxZoom={18}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
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
            </MapContainer>
            <div className="w-1/4">
                <h1 className="flex justify-center font-bold text-2xl p-5 text-white bg-gray-700"> Map #1 </h1>
                <p className="p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
            </div>
        </div>
    )
}
export default MapPage