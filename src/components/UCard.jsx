import styles from './UCard.module.css'
import {FaMapMarkerAlt, FaServer} from 'react-icons/fa'
const UCard = (props) => {
    return(
        <div className={styles.ucard}>
            <div className={styles.top} >
                <h2 className={styles.center}><FaMapMarkerAlt/><span className={styles.heading}>Seattle</span></h2>
            </div>
            <div className={styles.bottom}>
                <div className={styles.bottom_wrapper}>
                    <div className={styles.icon}><FaServer/></div>
                    <h2 className={styles.name}>Historic City</h2>
                </div>
                <p className={styles.author}>Author: Bryan</p>
            </div>
        </div>
    )
}

export default UCard

// styles={{backgroundImage:`url(${props.bg_img})`}}