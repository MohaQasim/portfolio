import React, { useEffect, useState } from 'react';
import styles from "./services.module.scss";
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
//import { classicNameResolver } from 'typescript';
import classNames from 'classnames'
import Card from '../Card/Card';
// import Resume from "./resume.pdf";


type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count] = useState(0);

  useEffect(() => {
    document.title = `Clicked the button ${count} times`;
  }
  )
  return (
    <div className={styles.Services} >

      {/* {left side} */}
      <div className={styles.awesome}>
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a href='Resume' download>
        <button className={classNames(styles.button, styles.sButton)}>Dawnload CV</button>
        </a>
        <div className={classNames(styles.blur, styles.sBlur1)} style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* {right side} */}
      {/* the first card */}
      <div className={styles.Cards}
         style={{ left: '14rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        


        {/* the second card */}
        <div className={styles.Cards} style={{ top: '12rem', left: '-4rem' }} >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>


        {/* the 3d card */}
        <div className={styles.Cards} style={{ top: '19rem', left: '12rem' }} >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"}
          />

        </div>
        <div className={classNames(styles.blur, styles.sBlur2)}
         style={{background: 'var(--purple)'}}></div>
      </div>
    </div>

  )
}

export default ClickCount
