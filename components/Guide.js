import { Fragment } from "react"
import dynamic from 'next/dynamic';

import Gallery from "./Gallery"
const MapWithNoSSR = dynamic(() => import("./Map"), { ssr:false, })

export default function Guide(props) {
    return(
        <Fragment>
            <MapWithNoSSR data ={props.data}/>
            <Gallery data={props.data}/>
        </Fragment>
    )
}