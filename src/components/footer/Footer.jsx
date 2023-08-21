"use client"

import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerName}>
        @Meshe 2023
      </div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} className={styles.icon} alt='myfacebook' />
        <Image src='/2.png' width={15} height={15} className={styles.icon} alt='my' />
        <Image src='/3.png' width={15} height={15} className={styles.icon} alt='' />
        <Image src='/4.png' width={15} height={15} className={styles.icon} alt='' />
      </div>
    </div>
  )
}

export default Footer