import React from 'react'
import styles from './chat-list-element.module.css'
import Image from 'next/image'

const ChatListElement = ({ user }) => {

    return (
        <div className={styles.user}>
            <div className={styles['img-container']}>
                <Image src='/profile-1.jpeg' fill alt='user-image' />
            </div>
            <p>{user.name}</p>

            <div className={`${styles.indicator} ${user.available ? styles['indicator--active'] : ''}`}></div>
        </div>
    )
}

export default ChatListElement
