import React from 'react'
import styles from './publish-card.module.css'
import Image from 'next/image'

const PublishCard = () => {
    return (
        <div className={styles['publish-card']}>
            <div className={styles['img-container']}>
                <div className={styles.image}>
                    <Image src='/rei.jpeg' fill style={{ objectFit: "cover", zIndex: "-100" }} alt='publish image'/>
                    <button className={styles.like} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
                    </button>
                </div>
            </div>
            <div className={styles.meta}>
                <div>
                    <h3 className='title'>Beautifull Image</h3>
                    <p>By This beauty guy</p>
                </div>
                <div className={styles['liked-by']}>
                    <div className={`${styles.profile} ${styles['item--1']}`}><Image src='/profile-1.jpeg' fill alt='user-image'/></div>
                    <div className={`${styles.profile} ${styles['item--2']}`}><Image src='/profile-2.jpeg' fill alt='user-image'/></div>
                    <div className={`${styles.profile} ${styles['item--3']}`}><Image src='/profile-3.jpeg' fill alt='user-image'/></div>
                    <div className={`${styles['likes-number']}  ${styles['item--4']}`}>+450</div>
                </div>
            </div>
            <button className='btn'>Share</button>
        </div>
    )
}

export default PublishCard
