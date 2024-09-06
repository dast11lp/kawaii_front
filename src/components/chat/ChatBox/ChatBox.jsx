'use client'

import React, { useState } from 'react'
import styles from './chat-box.module.css'
import Messages from './Messages/Messages'
import Typing from './Typing/Typing'
import Head from './Head/Head'

const ChatBox = () => {

    const [open, setOpen] = useState(true)

    const closeChat = () => {
        setOpen(false)
    }



    return (
        // <div className={styles['chat-box']}>
        <div className={`${styles['chat-box']} ${open ? '' : styles.hidden}`}>
            <Head closeChat={closeChat} />
            <Messages />
            <Typing />
        </div>
    )
}

export default ChatBox
