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

                <li className={activeMobileNav ? styles.flexSubRowParentContainer : null} onClick={() => setActiveMobileNav(false)}>
                    <div className={styles.flexSubRowParent}>
                        <ul className={`${styles.flexSubRow} ${activeMobileNav ? styles.activeSubRow : null}`}>
                            <li className={`${router.pathname === "/get-involved" ? styles.active : ""} ${styles.linkItem}`}> {/* this is a ternary expression */}
                                <Link href="/get-involved">Get involved</Link>
                            </li>
                            <li className={` ${styles.linkItem} ${styles.subNav}`}>
                                <Link href="/about" className={`${router.pathname === "/about" ? styles.active : ""} ${styles.subNavLink}`}>
                                    <div>About ICF
                                        <div className={styles.subNavArrow}>
                                            <svg className="arrowSvg" width="50" height="50">
                                                <path d="m 42.681584,33.69458 -14.14025,14.140163 c -0.68197,0.681967 -1.78761,0.681967 -2.46951,0 l -1.64923,-1.649203 c -0.68079,-0.680852 -0.6821,-1.784279 -0.003,-2.466652 L 35.626034,32.459732 24.419654,21.200739 c -0.6792,-0.682403 -0.67789,-1.78579 0.003,-2.46659 l 1.64921,-1.649224 c 0.68197,-0.681968 1.78761,-0.681968 2.46951,0 l 14.14014,14.140162 c 0.68197,0.681867 0.68197,1.787526 1.1e-4,2.469493 z" fill="#ffffff"/>
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
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
                    </div>
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