import Gallery from "../components/Gallery"
// import Map from "../components/Map"
import data from "../data.json"

import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import("../components/Map"), { ssr:false, })

const Home = () => {
    return(
        <div>
            <h1>This Was BE-200</h1>
            <h2>Introduction To Built Environments</h2>
            <p>Bruh</p>
            <MapWithNoSSR data ={data}/>
            {/* <Gallery data={data}/> */}
        </div>
    )
}

export default Home