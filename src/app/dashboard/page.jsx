'use client'

import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
import userSWR from 'swr'

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [err, setErr] = useState(false)
  // const [isLoading, setisLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //       cache: 'no-store'
  //     })
  //     // The return value is *not* serialized
  //     // You can return Date, Map, Set, etc.
     
  //     if (!res.ok) {
  //       // This will activate the closest `error.js` Error Boundary
  //       setErr(true)
  //     }
     
  //     const data = await res.json()

  //     setData(data)
  //     setisLoading(false)
  //   };
  //   getData()
  // }, []);

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = userSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  console.log(data)
  return (
    <div className={styles.container}>Dashboard</div>
  )
}

export default Dashboard