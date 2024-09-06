import React from 'react'
import ChatListElement from './ChatListElement/ChatListElement'

import styles from './chat-list.module.css'

const ChatList = () => {

    const img = ''

    const chatPeople = [
        {
            id: 1,
            name: 'John Doe',
            nick: '@johndoe98',
            available: true,
            img
        },
        {
            id: 1,
            name: 'John Doe',
            nick: '@johndoe98',
            available: true,
            img
        },
        {
            id: 1,
            name: 'John Doe',
            nick: '@johndoe98',
            available: false,
            img
        },
        {
            id: 1,
            name: 'John Doe',
            nick: '@johndoe98',
            available: false,
            img
        },
    ]


    return (
        <div className={styles['chat-list-box']}>
            <h2 className={styles.title}> Chats </h2>
            <div className={styles['list-users']}>
                {
                    chatPeople.map((user) => (
                        <ChatListElement key={user.id} user={user} />
                    ))
                }
            </div>

        </div>
    )
}

export default ChatList
