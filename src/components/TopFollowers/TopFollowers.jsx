import React from 'react'
import styles from './top-followers.module.css'
import Link from 'next/link'
import PositionFollower from './PositionFollower/PositionFollower'

const TopFollowers = () => {
    return (
        <div className={styles['top-followers']}>
            <div className={styles.nav}>
                <h3>Top Creators</h3>
                <Link href=''>See all</Link>
            </div>
            <div className={styles['list-followers']}>
                <PositionFollower position={1}/>
                <PositionFollower position={2}/>
                <PositionFollower position={3}/>
                <PositionFollower position={4}/>
            </div>
        </div>
    )
}

export default TopFollowers
