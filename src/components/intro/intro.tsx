import React, { /*useState*/ } from 'react'
import styles from './intro.module.scss'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import glassesimoji from '../../img/glassesimoji.png'
//import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import classNames from   'classnames'
import FloatingDiv from '../FloatingDiv/FloatingDiv'


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

      <button className={classNames(styles.button, styles.iButton)}>  hire me</button>
       <div className={styles.iIcons}>
        <a href="https://github.com/"><img src={Github} alt="" /></a>
        <a href="https://www.linkedin.com/feed/"><img src={LinkedIn} alt="" /></a>
        <a href="https://www.instagram.com/"><img src={Instagram} alt="" /></a>
        
       </div>
    </div> 

     <div className={styles.iRight}>
      <img src={Vector1} alt="" />
      <img src={Vector2} alt="" />
      <img src={boy} alt="" />
      <img src={glassesimoji} alt="" />
      <div>
        <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
      </div>
     </div>

  </div>

  )
}

export default Intro
