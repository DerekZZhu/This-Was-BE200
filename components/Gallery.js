import styles from './Gallery.module.css'
import Card from './Card'
const Gallery = (props) => {
    return(
        <div id={styles.scroll}>
            {
                props.data.map((data_i, i) => {
                    <Card id={i} img={data_i.img} text={data_i.text} location={data_i.name}/>
                })
            }
        </div>
    )
}

export default Gallery