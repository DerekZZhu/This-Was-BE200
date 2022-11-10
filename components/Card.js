import styles from './Gallery.module.css'
const Card = (props) => {
    return(
        <div className={styles.card} id={props.key}>
            <div className={`${styles.card_face} ${styles.card_face_front}`} id={props.key} style={{backgroundImage:props.color}}>
                <div className={styles.card_image} style={{backgroundImage:`url('${props.img}')`}}></div>
                    <h2 id={props.key}>{props.location}</h2>
                </div>
                <div className={`${styles.card_face} ${styles.card_face_back}`} id={props.key} style={{backgroundImage:props.color}}>
                    <p className={styles.card_details} id={props.key}>
                        {props.text}
                    </p>
            </div>
        </div>
    )
}

export default Card