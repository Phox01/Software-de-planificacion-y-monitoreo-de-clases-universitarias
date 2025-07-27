import React from 'react'
import { Link } from "react-router-dom";
import styles from '../CSS/Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/profile" className={styles.profileImg}>
        
      </Link>
    </div>
  )
}
