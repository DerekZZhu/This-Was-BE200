import styles from './Gallery.module.css'
import Card from './Card'

const lighter = ["#E74856", "#ffb900", "#FDE047", "#7ed56f", "#22D3EE", "#818CF8", "#2998ff"]
const darker = ["#EA005E", "#ff7730", "#EAB308", "#28b485", "#0EA5E9", "#8B5CF6", "#5643fa"]
const Gallery = (props) => {
    return(
        <div id={styles.scroll}>
            {
                props.data.map((data_i, index) => {
                    var cindex = index%lighter.length;
                    return( <Card 
                        num={index} 
                        img={data_i.img} 
                        text={data_i.text} 
                        location={data_i.name} 
                        color={`linear-gradient(to right bottom, ${lighter[cindex]}, ${darker[cindex]})`}
                        passup={props.updateTarget}
                        key={index}
                        />)
                })
            }
        </div>
    )
}

export default Gallery