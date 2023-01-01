import api_key from "../env.js"
import { useState, useRef } from "react"
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer } from "@react-google-maps/api"

import style from "./Create.module.css"


const center = {lat:47.6553, lng:-122.3035}
const libraries = ['places']
const Create = () => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: api_key,
        libraries 
    })
    const google = window.google;

    const [map, setMap] = useState(null)
    const [directionResponse, setDirectionResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')

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
        console.log(originRef.current.value);
        const directionService = new google.maps.DirectionsService()
        const results = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
    }

    return(
        <div className={style.create_page} style={{height:'88vh'}}>
            <div className={style.dashboard}>
                <div className={style.form}>
                        <Autocomplete>
                            <input type="text" id="from" ref={originRef}/>
                        </Autocomplete>

                        <Autocomplete>
                            <input type="text" id="to" ref={destinationRef}/>
                        </Autocomplete>
                    <button onClick={calculateRoute}>Calculate Route</button>
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
