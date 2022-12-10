import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import styles from '../searchBar/SearchBar.module.css'
import { Link } from 'react-router-dom';
// import styles from './Nav.module.css'


export default function Nav(props) {
    const { onSearch } = props
    return(
        <div className={styles.nav}>
            <Link to='/home' className={styles.home}>Home</Link>
            <Link to='/about' className={styles.about}>About</Link>
            <SearchBar onSearch={onSearch}/>
        </div   >
    )
}


