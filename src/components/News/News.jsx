import React from 'react'
import styles from './news.module.css'
import PublishCard from '../PublishCard/PublishCard'

const News = () => {
  return (
    <div className={styles.news} >
      <PublishCard />
      <PublishCard />
    </div>
  )
}

export default News
