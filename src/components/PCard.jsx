import './pCard.css'
import { Link } from 'react-router-dom';
const PCard = (props) => {
    function handleClick() {
        console.log(props.keyII);
        console.log(props.isActive);
        props.passup(props.keyII)
    }
    

    return(
        <div className={`iv ${props.isActive?'iv_grow':''}`} style={{backgroundImage:`linear-gradient(to right, ${props.theme?"#1e272e":"rgba(0,0,0,0)"}, transparent), url('${props.bg_img}')`}} onClick={handleClick}>
            <div className="content_wrapper">
                <span className='icon_wrapper' style={{color:props.color}}>{props.icon}</span>
                <h3>{props.name}</h3>
            </div>
            {
                props.isActive &&
                <Link to={props.link} className="link">Go to walk!</Link>
            }
        </div>
    )
}

export default PCard