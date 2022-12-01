import React, { useState } from 'react'
import styles from './intro.module.scss'
// import Github from '../../img/github.png'
// import LinkedIn from '../../img/linkedin.png'
// import Instagram from '../../img/instagram.png'
import classNames from   'classnames'

const Intro: React.FC= () => {

  // const [buttonDefaultStyle, setButtonDefaultStyle] = useState<boolean>(true)

  // const handleButtonClick = () => {
  //   setButtonDefaultStyle(!buttonDefaultStyle)
  

  return (
  <div className ={styles.intro}>
     <div className={styles.iLeft}>
     <div className={styles.iName}>
           <span>Hei! I Am</span>
           <span>Mohammed Almajmae</span>
           <span>Frontend Developer with high 
            level of experience in web designing
            and development, producting the 
            Quality work</span>
     </div>
             
    {/* <button
      className={buttonDefaultStyle ? styles.button : styles.button1}
      onClick={() => handleButtonClick()}>
        asd
      </button> */}

      <button className={classNames(styles.button, styles.iButton)}>
        hire me
      </button>
    </div> 

     <div className={styles.iRight}>
      i am right sida
     </div>

  </div>

  )
}

export default Intro
