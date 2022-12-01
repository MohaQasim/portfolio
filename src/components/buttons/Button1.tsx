import React from 'react'
import styles from './button1.module.scss'

type Button1Props = {
 onClick?: () => void
 children?: React.ReactNode
}

const Button1: React.FC<Button1Props> = ({ onClick, children }) => {

  const handIeButtonClick = () => {}

  return (
    <button className={styles.container} onClick={onClick}>
        { children && children }
    </button>
  )
}

export default Button1
