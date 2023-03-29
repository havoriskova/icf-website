import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import {withRouter} from "next/router";
import { useState } from "react";


function Navbar({router}) {

    const [activeMobileNav, setActiveMobileNav] = useState(false);

    const toggleMobileNav = () => {
        activeMobileNav ? setActiveMobileNav(false) : setActiveMobileNav(true);
    }


    return(
        
        <div className={`${styles.navbarContainer} kumbhSansSemiBold`}>
            
            <ul className={styles.flexRow}>
                <li className={styles.logo} > 
                    <Link href="/">
                        <Image className={styles.logoImg} alt="logo" src="/icf_logo.ico.svg" width={50} height={50}/>
                    </Link>
                </li>

                <li className={styles.flexSubRowParent}>
                    <ul className={`${styles.flexSubRow} ${activeMobileNav ? styles.activeSubRow : null}`}>
                        <li className={`${router.pathname === "/get-involved" ? styles.active : ""} ${styles.linkItem}`}> {/* this is a ternary expression */}
                            <Link href="/get-involved">Get involved</Link>
                        </li>
                        <li className={`${router.pathname === "/about" ? styles.active : ""} ${styles.linkItem} ${styles.subNav}`}>
                            <Link href="/about">About ICF</Link>
                            <ul className={styles.subNavList}>
                                {/* <li className={`${router.pathname === "/about/team" ?  styles.active : ""} ${styles.subNavLinkItem}`}>
                                    <Link href="/about/team">Team</Link>
                                </li> */}
                                <li className={`${router.pathname === "/about/our-work" ?  styles.active : ""} ${styles.subNavLinkItem}`}>
                                    <Link href="/about/our-work">Our Work</Link>
                                </li>
                                <li className={`${router.pathname === "/about/contact" ?  styles.active : ""} ${styles.subNavLinkItem}`}>
                                    <Link href="/about/contact">Contact</Link>
                                </li>
                            </ul>
                        </li>
                        <li className={`${router.pathname === "/partners" ?  styles.active : ""} ${styles.linkItem}`}>
                            <Link href="/partners">Partners</Link>
                        </li>
                        <li className={`${router.pathname === "/blog" ?  styles.active : ""} ${styles.linkItem}`}>
                            <Link href="/blog">Stories</Link>
                        </li>
                        <li className={`${router.pathname === "/shop" ?  styles.active : ""} ${styles.linkItem}`}>
                            <Link href="/shop">Impact Shop</Link>
                        </li>
                    </ul>
                </li>

                <li className={`${router.pathname === "/donate" ?  styles.active : ""} ${styles.linkItem} ${styles.accentColor}`}>
                    <Link href="/donate" className={styles.linkAccentColor}>Donate</Link>
                </li>
                <li className={`${styles.hamburgerMenu} ${activeMobileNav ? styles.activeHamburger : null}`} onClick={toggleMobileNav}><span></span><span></span><span></span></li>
            </ul>

        </div>
    )
}

export default withRouter(Navbar);