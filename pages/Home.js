import data from "../data.json"
import styles from '../styles/Home.module.css'

import Guide from '../components/Guide'

const Home = () => {
    return(
        <div className={styles.app}>
            <h1>This Was BE-200</h1>
            <h2>Introduction To Built Environments</h2>
            <p>Bruh</p>
            <Guide data={data}/>
        </div>
    )
}

export default Home