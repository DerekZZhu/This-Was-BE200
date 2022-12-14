import gaypi_key from "../env.js"
import { useState, useRef } from "react"
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from "@react-google-maps/api"
import { FaPlus } from "react-icons/fa"

import style from "./Create.module.css"


const center = {lat:47.6553, lng:-122.3035}
const libraries = ['places']

const Create = (props) => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: gaypi_key,
        libraries 
    })
    const google = window.google;

    const [map, setMap] = useState(null)
    const [directionResponse, setDirectionResponse] = useState(null)

    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

    const [wayPoints, setWayPoints] = useState([])
    const [count, setCount] = useState(0)

    const originRef = useRef()
    const destinationRef = useRef()

    if (!isLoaded) {
        console.log("not loaded");
        return(<h1>hentai</h1>)
    }

    async function calculateRoute() {
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return
        }  
        console.log(wayPoints);
        const directionService = new google.maps.DirectionsService()
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING,
            waypoints: updateWaypoints()
        })
        setDirectionResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    function updateWaypoints() {
        let data = [...wayPoints]
        for(var i = 0; i < count; i++) {
            data[i] = {location: document.getElementById(`${i}`).value}
        }
        setWayPoints([...data])
        return data
    }

    const addStop = () => {
        if (originRef.current.value === "") {
            return
        }
        updateWaypoints()
        setCount(count+1)
    }

    console.log(count);
    console.log(wayPoints);
    return(
        <div className={style.create_page} style={{height:'88vh'}}>
            <div className={style.dashboard}>
                <div className={style.form}>
                        <Autocomplete>
                            <input type="text" id="from" ref={originRef} placeholder="Enter Starting Location"/>
                        </Autocomplete>
                        {Array(count).fill().map((input, index) => {
                                return(
                                    <Autocomplete key={index}>
                                        <input type="text" id={index} placeholder="Enter Stop"/>
                                    </Autocomplete>
                                )
                            })
                        }
                        <Autocomplete>
                            <input type="text" id="from" ref={destinationRef} placeholder="Enter Ending Location"/>
                        </Autocomplete>

                        <div className={style.add} onClick={addStop}>
                            <FaPlus/>
                        </div>
                </div>
                <div className={style.block}/>
                <div className={style.calc}>
                    <button onClick={calculateRoute}>Calculate Route</button>
                    <h3>Distance: {distance}</h3>
                    <h3>Duration: {duration}</h3>
                </div>
            </div>

            <GoogleMap 
                center={center} 
                zoom={15} 
                mapContainerStyle={{width: '100%', height:'100%'}}
                options={{
                    streetViewControl: false,
                    mapTypeControl:false,
                    fullscreenControl:false,
                }}
                onLoad={(map) => setMap(map)}
            >   
                {
                    directionResponse && <DirectionsRenderer directions={directionResponse}/>
                }
            </GoogleMap>
        </div>
    )
}

export default Create
