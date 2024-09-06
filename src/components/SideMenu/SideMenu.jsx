import React from 'react'
import SideNav from './SibeNav/SideNav'
import styles from './side-menu.module.css'

const SideMenu = () => {
  return (
    <div className={styles['side-menu']}>
      <div>
        <h2>Kawaii net</h2>
      </div>
      <SideNav />
      <SideNav />
    </div>
  )
}

export default SideMenu
