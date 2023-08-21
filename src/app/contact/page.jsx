import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src='/contact.png' alt='' fill={true} className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='John Doe' className={styles.input} />
          <input type="text" placeholder='John@gmail..' className={styles.input} />
          <textarea className={styles.textArea} cols={30} rows={10} placeholder='Message'></textarea>

          <Button url='#' text='Submit' />
        </form>
      </div>
    </div>
  )
}

export default Contact