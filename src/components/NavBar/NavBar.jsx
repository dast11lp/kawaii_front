import React from 'react'
import styles from './nav-bar.module.css'
import SearchBar from '../SearchBar/SearchBar'

const NavBar = () => {
  return (
    <div className={styles['nav-bar']}>
      <SearchBar />
    </div>
  )
}

export default NavBar
