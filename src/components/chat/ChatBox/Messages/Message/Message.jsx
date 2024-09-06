import React from 'react'
import styles from './message.module.css'

const Message = ({ message, type}) => {
    return (
        <span className={`${styles.message} ${type ? styles['message--other'] : ''}`} >
            {message}
        </span>
    )
}

export default Message
