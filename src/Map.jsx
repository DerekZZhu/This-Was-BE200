import React, {useEffect, useRef} from "react";
import L from "leaflet";

const Map = () => {
    const mapRef = useRef(null)
    const tileRef = useRef(null)

    tileRef.current = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    const mapStyles = {
        overflow: "hidden",
        width: "100%",
        height: "100vh"
    };
    
    const mapParams = {
        center: [37.0902, -95.7129],
        zoom: 13,
        zoomControl: false,
        maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
        closePopupOnClick: false,
        layers: [tileRef.current]
    };

    useEffect(() => {
        mapRef.current = L.map("map", mapParams);
    }, []);

    useEffect(() => {
        L.control.layers({
            OpenStreetMap: tileRef.current
        }).addTo(mapRef.current);

        L.control.zoom({
            position: "topright"
        }).addTo(mapRef.current);
    }, [])

    return (
        <div>
            <div id="map" style={mapStyles}/>
            <button onClick={() => {mapRef.current.flyTo([38.0902, -95.7129])}}>Flyto</button>
        </div>
    )
}

export default Map