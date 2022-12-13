import React, {useEffect, useRef} from "react";
import L from "leaflet";
import Card from './Card.jsx'
import './Map.css'

const Map = (props) => {
    const mapRef = useRef(null)
    const tileRef = useRef(null)

    tileRef.current = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    
    const mapParams = {
        center: props.data[0].coords,
        zoom: 13,
        zoomControl: false,
        maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
        closePopupOnClick: false,
        layers: [tileRef.current]
    };

    useEffect(() => {
        mapRef.current = L.map("map", mapParams);
        props.data.map(location => {
            L.marker(location.coords).addTo(mapRef.current)
        })
    }, []);

    useEffect(() => {
        L.control.zoom({
            position: "topright"
        }).addTo(mapRef.current);
    }, [])

    return (
        <div className="display">
            <div id="map"/>
            <div id="gallery">
                {
                    props.data.map((location, i) => {
                        console.log(location.coords);
                        return(
                            <Card 
                                image={location.img}
                                name={location.name}
                                info={location.text}
                                coords={location.coords}
                                sec="#EA005E"
                                pri="#E74856"
                                key={i}
                                reference={mapRef}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Map
