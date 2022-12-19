import styles from './Explore.module.css'
import UCard from '../components/UCard'

import React from 'react'
import { Link } from 'react-router-dom'
import * as FontAwesome from "react-icons/fa";

import data from './explore.json';

const Explore = (props) => {
    console.log(props.theme);
    return(
        <div className={styles.explore}>
            <div className>

            </div>
            <section className={styles.gallery}>
                {
                    data.map((item, i) => {
                        const icon = React.createElement(FontAwesome[item.icon])
                        return(
                            <Link to={item.link} className={styles.link}>
                                <UCard
                                    icon={icon}
                                    author={item.author}
                                    city={item.city}
                                    bg_img={item.bg_img}
                                    map_name={item.name}
                                    color={item.color}

                                    key={i}
                                    theme={props.theme}
                                >
                                </UCard>
                            </Link>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Explore