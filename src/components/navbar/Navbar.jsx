"use client"

import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import Darkmode from '../darkmode/Darkmode'

const links =[
    {
        id: 1,
        title: 'Home',
        slug: 'home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        slug: 'portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        slug: 'blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        slug: 'about',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        slug: 'contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        slug: 'dashboard',
        url: '/dashboard'
    }
]

const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href='/' className={styles.logo}>Dakley</Link>
        <div className={styles.links}>
            <Darkmode />
            {links.map(link=>(<Link key={link.slug} href={link.url} className={styles.link}>{link.title}</Link>))}
            <button className={styles.logout} onClick={() => {console.log('logged out')}}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar