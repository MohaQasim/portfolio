import React from 'react'
import './navbar.module.scss'
import styles from './navbar.module.scss'
// import {Link} from 'react-router-dom'
// import { isNoSubstitutionTemplateLiteral } from 'typescript'
import Button1 from '../buttons/Button1'
 //import { Link } from 'react-router-dom'
import { Link } from 'react-scroll'


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
        {/* <li><Link activeClass="active" to "Navbar" spy={true} smooth={true}> Home</Link></li> */}
        <li>AboutMe </li>
        {/* <li>Home</li> */}
        {/* <li>Servces</li> */}
        <li><Link to ="services" spy={true} smooth={true}> services</Link></li>
        <Link className = {styles.projects} to="projects"><li>Projects</li></Link>
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
