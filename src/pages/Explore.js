import styles from './Explore.module.css'
import UCard from '../components/UCard'
const Explore = () => {
    const bruh = [1, 2, 3, 4, 5, 6, 7, 8]
    return(
        <div className={styles.explore}>
            <div className>

            </div>
            <section className={styles.gallery}>
                {
                    bruh.map((i) => {
                        return(
                            <UCard>{i}</UCard>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Explore