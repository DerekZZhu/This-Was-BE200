import styles from './Home.module.css'
const Home = () => {
    const cob= ["Sakura", "Iris", "Cherry"]
    return(
        <div className={styles.home_page}>
            <section className={styles.main}>
                <h1>This Was BE 200</h1>
            </section>

            <section className={styles.about}>
                <div className={styles.about_left}>
                    <h2>Welcome to This Was BE 200!</h2>
                    <p>
                        This site was built for students at the University of Washingon to easily 
                        access interactive class walks while being able to be guided with routing
                        and geolocation for better experience. Furthermore by creating an account,
                        anyone can easily create their own walk guides and share it with others with our
                        easy to use mapping software!
                    </p>

                    <h2>Explore!</h2>
                    <p>
                        To the right are the 6 walks from BE 200 (AU 2022) version of the class. Feel free to click on
                        them to explore Seattle through 6 unique themes related to the study of the 
                        Built Environment. Navigate to the EXPLORE page to find other walks created 
                        by other students and users!
                    </p>

                    <h2>Create!</h2>
                    <p>
                        Creating your very own map or guide is extremely easy! Make an account,
                        navigate to the CREATE page and start creating! Unfortunately due to scaling
                        issues, each user is allotted 10 guides. These guides can be made public, saved, and
                        shared! Have fun!
                    </p>
                </div>
                <div className={styles.about_right}>
                    {
                        cob.map((item, i) => {
                            return(
                                <div>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </section>

            <section className="thanks">

            </section>
        </div>
    )
}

export default Home