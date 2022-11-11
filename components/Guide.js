import { Fragment, useState } from "react"
import dynamic from 'next/dynamic';

import Gallery from "./Gallery"
const MapWithNoSSR = dynamic(() => import("./Map"), { ssr:false, })

export default function Guide(props) {
    const [currentCard, changeCurrentCard] = useState(0)

    function updateTarget(id) {
        changeCurrentCard(id)
    }

    return(
        <Fragment>
            <MapWithNoSSR data={props.data} currentCard={currentCard}/>
            <Gallery data={props.data} updateTarget={updateTarget}/>
        </Fragment>
    )
}