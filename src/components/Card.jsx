import './Card.css'
import {Fragment, useState} from 'react'
const Card = (props) => {
    const [isActive, setIsActive] = useState(false)
    const coords = props.coords
    console.log(coords);
    function handleClick() {
        setIsActive(isActive?false:true)
    }

    return(
        <Fragment>
            <div className="card-face card-face-front" onClick={handleClick} style={{transform: isActive?'rotateY(180deg)':''}}>
                <div className="card-image" style={{backgroundImage:`url('${props.image}')`}}></div>
                <h2 className="card-name">{props.name}</h2>
            </div>
            <div className="card-face card-face-back" onClick={handleClick} style={{transform: isActive?'rotateY(0deg)':''}}>
                <p className="card-details">{props.info}</p>
            </div>
        </Fragment>
    )
}

export default Card