import styles from './Gallery.module.css'
const Card = (props) => {
    function detect_hover(e) {
        props.passup(e.currentTarget.id)
    }

    return(
        <div className={styles.card} id={`${props.num}`} onMouseOver={detect_hover}>
                <div className={`${styles.card_face} ${styles.card_face_front}`} id={`${props.num}`} style={{backgroundImage:props.color}}>
                    <div className={styles.card_image} style={{backgroundImage:`url('${props.img}')`}}></div>
                        <h2 id={props.key}>{props.location}</h2>
                    </div>
                    <div className={`${styles.card_face} ${styles.card_face_back}`} id={`${props.num}`} style={{backgroundImage:props.color}}>
                        <p className={styles.card_details} id={`${props.num}`}>
                            {props.text}
                        </p>
                </div>
        </div>
    )
}

export default Card