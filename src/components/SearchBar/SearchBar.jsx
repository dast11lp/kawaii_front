import React from 'react'
import styles from './search.module.css'

const SearchBar = () => {
  return (
    <div className={styles.search}>
      <input className={styles.search__input} />
      <button className='btn'>Search</button>
    </div>
  )
}

export default SearchBar
