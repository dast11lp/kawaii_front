import React from 'react'
import styles from './side-info.module.css'
import TopFollowers from '../TopFollowers/TopFollowers'
import ChatList from '../chat/ChatList/ChatList'

const SideInfo = () => {
  return (
    <div className={styles['side-info']}>
      <TopFollowers />
      <ChatList />
    </div>
  )
}

export default SideInfo
