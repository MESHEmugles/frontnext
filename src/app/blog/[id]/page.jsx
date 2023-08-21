import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'

async function getData({id}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    cache: 'no-store'
  })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return new PageNotFoundError()
  }
 
  return res.json()
}


const BlogPages = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>
              John Doe
            </span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg'
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Ipsum cumque tempore sunt. 
          Eveniet qui, quos amet, reiciendis provident,
        </p>
      </div>
    </div>
  )
}

export default BlogPages