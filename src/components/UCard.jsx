import styles from './UCard.module.css'
import {FaMapMarkerAlt} from 'react-icons/fa'
const UCard = (props) => {
    return(
        <div className={styles.ucard}>
            <div className={styles.top} style={{backgroundImage:`linear-gradient(to bottom, ${props.theme?"#1e272e":"rgba(0,0,0,0)"}, transparent), url('${props.bg_img}')`}}>
                <h2 className={styles.center}><FaMapMarkerAlt/><span className={styles.heading}>{props.city}</span></h2>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_wrapper}>
                    <div className={styles.icon}>{props.icon}</div>
                    <h2 className={styles.name}>{props.map_name}</h2>
                </div>
                <p className={styles.author}>Author: {props.author}</p>
            </div>
        </div>
    )
}

export default UCard

// styles={{backgroundImage:`url(${props.bg_img})`}}