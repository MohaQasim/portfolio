import React from 'react'
import './navbar.module.scss'
import styles from './navbar.module.scss'
// import {Link} from 'react-router-dom'
// import { isNoSubstitutionTemplateLiteral } from 'typescript'
import Button1 from '../buttons/Button1'


const Navbar: React.FC = () => {
  return (

    <div className ={styles.nWrapper}>
      <div className={styles.nLeft}>
          <p className={styles.nName}>
            M.Almajmae
          </p>
        <span>toggle</span>
      </div>
      <div className={styles.nRight}>
      <div className={styles.nList}>
      <ul style={{listStyleType: 'none'}}>
        <li>AboutMe </li>
        <li>Home</li>
        <li>Cv</li>
        <li>projects</li>  
      </ul>
      </div>
   
        <div className={styles.nButton}>
          <Button1>
            <p>Contact us</p>
          </Button1>
          <button className={styles.button }>
            <p>Contact us</p>
            </button>
            </div>
        
     </div>
     </div>
    
  )
}

export default Navbar
