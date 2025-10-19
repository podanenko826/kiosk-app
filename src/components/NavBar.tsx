'use client';
import React, { useState } from 'react'

import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquarePinterest } from "react-icons/fa6";

import styles from './NavBar.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const navigation = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact us', href: '/contact' },
]

const NavBar = () => {
    const [menuOpened, setMenuOpened] = useState<boolean>(false);

    const currentPathname = usePathname();

    return (
        <header>
            <div className='d-md-none container-fluid' id={styles.mobileNavBar}>
                <div className='container' id={styles.logoContainer}>
                    <Link href={'/'}>
                        <div role='button' id={styles.mobileLogo}>
                            <h1>Kiosk App</h1>
                        </div>
                    </Link>

                    <div id={styles.menuToggle} role='button' onClick={() => setMenuOpened(!menuOpened)}><AiOutlineMenu /></div>
                </div>
                {menuOpened && (
                    <div id={styles.mobileNavigation}>
                        <div className='container'>
                            <div className='container'>
                                <ul id={styles.navLinks}>
                                    {navigation.map((item, index) => (
                                        <li key={index}>
                                            <a key={index} className={currentPathname == item.href ? 'btn-active' : ''} href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>

                                <div>
                                    <ul id={styles.socialLinks}>
                                        <li>
                                            <div id={styles.menuToggle} role='button'>
                                                <RiInstagramFill />
                                            </div>
                                        </li>
                                        <li>
                                            <div id={styles.menuToggle} role='button'>
                                                <FaSquarePinterest />
                                            </div>
                                        </li>
                                    </ul>
                                </div>


                            </div>
                            <div id={styles.menuToggle} role='button' onClick={() => setMenuOpened(!menuOpened)}><TfiClose /></div>
                        </div>
                        <div className='container' id={styles.mobileSignUp}>
                            <div role='button' id={styles.mobileSignUpBtn}>
                                Log in
                            </div>

                            <div role='button' id={styles.mobileSignUpBtn}>
                                Sign up
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop NavBar */}

            <div className='d-none d-md-block container-fluid' id={styles.navBar}>
                <div className='container' id={styles.logoContainer}>
                    <Link href={'/'}>
                        <div role='button' id={styles.logo}>
                            <h1>Kiosk App</h1>
                        </div>
                    </Link>

                    <div id={styles.signUp}>
                        <div role='button' id={styles.logInButton}>
                            Log in
                        </div>

                        <div role='button' id={styles.signUpButton}>
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar