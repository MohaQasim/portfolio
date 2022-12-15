import React from 'react'
import Styles from './FloatingDiv.module.scss'
type FloatingDivProps = {
    image: string;
    text1: string;
    text2: string;

}

const FloatingDiv: React.FC<FloatingDivProps> = ({image, text1, text2}) => {
  return (
    <div className={Styles.floatingDiv}>
      <img src={image} alt="" />
      <span>
        {text1}
        <br/>
       {text2}
      </span>
    </div>
  )
}

export default FloatingDiv

