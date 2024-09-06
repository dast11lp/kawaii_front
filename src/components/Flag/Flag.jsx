import React from 'react'
import styles from './flag.module.css'
import Image from 'next/image'

const Flag = () => {
    return (
        <div className={styles.flag}>
            <Image src="/game-1.jpg" fill style={{ objectFit: "cover", zIndex: "-100" }} alt="Adventure Background" />
            <h2 className={styles.flag__title}>Discover this fantastic Chine Adventure</h2>
            <div className={styles.button__content}>
                <button className='btn btn--primary'>Discover</button>
                <button className='btn'>Create</button>
            </div>
        </div>
    )
}

export default Flag
