import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import {useState, useRef} from 'react'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import styles from './Map.module.css'

const Map = (props) => {
    const [map, setMap] = useState(null);

    function handleFlyTo(coords) {
        map.flyTo(coords, 15, {duration: 2})
    }

    // handleFlyTo(props.data[props.currentCard].coords)
    return(
        <MapContainer center={props.data[0].coords} zoom={16} scrollWheelZoom={true} id={styles.map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                props.data.map((data_i, i) => {
                    return(
                        <Marker position={data_i.coords} id={i}>
                            <Popup>
                                A pretty CSS3 popup. <br/> Easily customizable.
                            </Popup>
                        </Marker>
                    )
                })
            }
        </MapContainer>
    )
}

export default Map