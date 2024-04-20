import world_map from '../images/world_map.jpg'

const Home = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl"> Storyline </h1>
            <div className="flex justify-center">
                <img src={world_map} alt="map" width="500" height="600"></img>
            </div>
            <p> This app does etc etc. </p>
        </div>
        
    )
}
export default Home