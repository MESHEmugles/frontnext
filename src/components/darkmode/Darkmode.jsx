'use client'

import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import { ThemeContext } from '@/context/Themecontext'


const Darkmode = () => {

  const{toggle, mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌑</div>
      <div className={styles.icon}>🌞</div>
      <div className={styles.ball}  
      style ={mode =='light' ? {right:'2px'}: {left:'2px'} }/>
    </div>
  )
}

export default Darkmode