import Gallery from "../components/Gallery"
import data from "../data.json"
const Home = () => {
    console.log(data)
    return(
        <div>
            <h1>This Was BE-200</h1>
            <h2>Introduction To Built Environments</h2>
            <p>Bruh</p>
            <Gallery data={data}/>
        </div>
    )
}

export default Home