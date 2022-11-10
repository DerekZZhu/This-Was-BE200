import styles from './Gallery.module.css'
const Card = (props) => {
    return(
        <div className={styles.card} id={props.id}>
            <div className="card-face card-face-front" id={props.id} style={{backgroundImage:props.color}}>
                <div class="card-image" style={{backgroundImage:props.img}}></div>
                    <h2 id={props.id}>{props.location}</h2>
                </div>
                <div class="card-face card-face-back" id={props.id} style={{backgroundImage:props.color}}>
                    <p class="card-details" id={props.id}>
                        {props.text}
                    </p>
            </div>
        </div>
    )
}

export default Card