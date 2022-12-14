import React from 'react';
import styles from './Card.module.scss';

type CardProps = {
    emoji: string;
    heading: string;
    detail: string;

}

const Card: React.FC<CardProps> = ({emoji, heading, detail}) => {
  return (
    <div className={styles.Card} style={{borderColor:'color'}}>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className={styles.cButton}>LEARN MORE</button>
    </div>
  )
}

export default Card

