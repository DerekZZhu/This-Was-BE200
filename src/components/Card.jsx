import './Card.css'
import {useState} from 'react'
const Card = (props) => {
    const [isActive, setIsActive] = useState(false)
    const backdrop = `linear-gradient(to right bottom, ${props.pri}, ${props.sec})`

    function handleClick() {
        setIsActive(isActive?false:true)
        props.reference.current.flyTo(props.coords, 18)
    }

    return(
        <div className='card'>
            <div className="card-face card-face-front" onClick={handleClick} style={{transform: isActive?'rotateY(180deg)':'', backgroundImage:backdrop}}>
                <div className="card-image" style={{backgroundImage:`url('${props.image}')`}}></div>
                <h2 className="card-name">{props.name}</h2>
            </div>
            <div className="card-face card-face-back" onClick={handleClick} style={{transform: isActive?'rotateY(0deg)':'', backgroundImage:backdrop}}>
                <p className="card-details">{props.info}</p>
            </div>
        </div>
    )
}

export default Card