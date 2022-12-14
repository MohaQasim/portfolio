import React, {useEffect, useState } from 'react';
import styles from "./services.module.scss";

import HeartEmoji from "../../img/heartemoji.png"
//import Glasses from "../../img/glasses.png"
//import Humble from "../../humble.png"
//import { classicNameResolver } from 'typescript';
import classNames from 'classnames'
import Card from '../Card/Card';


type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
    const [count] = useState(0);

    useEffect(() => {
        document.title = `Clicked the button ${count} times`;
    }
    )
    return (
      <div className={styles.Services}>

        {/* {left side} */}
       <div className={styles.awesome}>
        <span>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
         <br />
         ispum is simpley dummy text of printing 
        </span>
        <button className={classNames(styles.button, styles.sButton)}>Dawnload CV</button>
        <div  className={classNames(styles.blur, styles.sBlur)} style={{background:"#ABF1FF94"}}> </div>
       </div>
        
        {/* {right side} */}
        <div className={styles.cards}>

          <div>
          <Card
          emoji={HeartEmoji}
          heading={"Design"}
          detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
           />
          </div>
        </div>
      </div>

      )
    }

export default ClickCount
