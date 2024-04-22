import ExampleMap from '../images/example_map.jpg'
import ExampleInfobox from '../images/example_infobox.png'

const Home = () => {
    return (
        <div className="flex justify-center">
            <div className="w-4/6">
                {/* Title */}
                <h1 className="flex justify-center font-bold text-2xl p-5 text-red-700"> Storyline Mapper </h1>

                {/* Example Map */}
                <div className="flex justify-center">
                    <div className="w-3/6 h-3/6">
                        <img className="w-full" src={ExampleMap} alt="map"/>
                    </div>
                </div>
                <p className="p-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                
                {/* Example Infobox */}
                <div className="flex justify-center p-5">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                    <img src={ExampleInfobox} alt="map"></img>
                </div>
            </div>
        </div>
    )
}
export default Home