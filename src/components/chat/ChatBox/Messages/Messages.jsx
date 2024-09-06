import React from 'react'
import styles from './messages.module.css'
import Message from './Message/Message'

const Messages = () => {

    const message1 = 'hello'

    const message2 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ad, tempore, voluptates sit quam sunt laudantium animi modi voluptatibus autem, perspiciatis velit excepturi. Praesentium saepe a enim repellat iusto veniam.'
    
    const message3 = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque ad, tempore, voluptates sit quam sunt laudantium animi modi voluptatibus autem, perspiciatis velit excepturi. Praesentium saepe a enim repellat iusto veniam.'


    return (
        <div className={styles.messages}>
            <Message message={message1} type={0}/>
            <Message message={message2} type={1}/>
            <Message message={message3} type={0}/>
        </div>
    )
}

export default Messages
