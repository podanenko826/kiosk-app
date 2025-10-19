import React from 'react'

import { RiInstagramFill } from "react-icons/ri";
import { FaSquarePinterest } from "react-icons/fa6";

import styles from './Footer.module.css'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='container-fluid' id={styles.footer}>
        <div className='container' id={styles.footerTop}>
            <ul>
                <p><strong>LEGAL</strong></p>
                <li>
                    <Link href={''}>Terms of use</Link>
                </li>
                <li>
                    <Link href={''}>License agreement</Link>
                </li>
                <li>
                    <Link href={''}>Privacy policy</Link>
                </li>
            </ul>

            <ul className='d-none d-md-block'>
                <p><strong>OUR CATALOGUE</strong></p>
                <li>
                    <Link href={''}>Goods</Link>
                </li>
            </ul>

            <ul>
                <p><strong>SUPPORT</strong></p>
                <li>
                    <Link href={''}>FAQ</Link>
                </li>
                <li>
                    <Link href={''}>Contact us</Link>
                </li>
            </ul>

            <ul className='d-none d-md-block'>
                <p><strong>SOCIAL MEDIA</strong></p>
                <div>
                    <ul id={styles.socialLinks}>
                        <li>
                            <div id={styles.socialLinkBtn} role='button'>
                                <RiInstagramFill />
                            </div>
                        </li>
                        <li>
                            <div id={styles.socialLinkBtn} role='button'>
                                <FaSquarePinterest />
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
        <div className='container d-md-none'>
            <ul>
                <p><strong>SOCIAL MEDIA</strong></p>
                <div>
                    <ul id={styles.socialLinks}>
                        <li>
                            <div id={styles.socialLinkBtn} role='button'>
                                <RiInstagramFill />
                            </div>
                        </li>
                        <li>
                            <div id={styles.socialLinkBtn} role='button'>
                                <FaSquarePinterest />
                            </div>
                        </li>
                    </ul>
                </div>
            </ul>
        </div>
        <div className='container' id={styles.footerBottom}>
            <Link className='d-none d-md-block' href={'/'}>
                <div role='button' id={styles.mobileLogo}>
                    <h1>Kiosk App</h1>
                </div>
            </Link>

            <p>© COPYRIGHT 2025 KIOSK APP - ALL RIGHTS RESERVED</p>
        </div>
    </footer>
  )
}

export default Footer