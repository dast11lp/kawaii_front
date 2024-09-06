import Image from 'next/image'
import React from 'react'

import styles from './position-follower.module.css'

const PositionFollower = ({position}) => {
  return (
    <div className={styles.position}>
      <span>{position}.</span>
      <div className={styles['img-container']}>
        <Image src='/profile-1.jpeg' fill alt='user-image'/>
      </div>
      <div>
        <p className={styles.name}>John Doe</p>
        <p className={styles.nick}>@johndoe</p>
      </div>
      <button className={`btn`}>Follow</button>
    </div>
  )
}

export default PositionFollower
