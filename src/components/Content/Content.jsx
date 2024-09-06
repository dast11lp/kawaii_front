import React from 'react'
import NavBar from '../NavBar/NavBar'

import styles from './content.module.css'
import Flag from '../Flag/Flag'
import News from '../News/News'

const Content = () => {
    return (
        <div className={styles.content}>
            <NavBar />
            <div>
                <Flag />
            </div>
            <News />
        </div>
    )
}

export default Content
