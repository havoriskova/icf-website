import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import {withRouter} from "next/router";



function Navbar({router}) {

    return(
        
        <div className={styles.navbarContainer}>
            
            <ul className={styles.flexRow}>
                 <li className={styles.logo} > 
                    <Link href="/">
                        <Image className={styles.logoImg} alt="logo" src="/icf_logo.ico.png" width={50} height={30}/>
                    </Link>
                </li>

                <li className={`${router.pathname === "/get-involved" ? styles.active : ""} ${styles.linkItem}`}> {/* this is a ternary expression */}
                    <Link href="/get-involved">Get involved</Link>
                </li>
                <li className={`${router.pathname === "/about" ? styles.active : ""} ${styles.linkItem}`}>
                    <Link href="/about">About ICF</Link>
                    <ul className={styles.hidden}>
                        <li className={router.pathname === "/about/team" ?  styles.active : ""}>
                            <Link href="/about/team">Team</Link>
                        </li>
                        <li className={router.pathname === "/about/our-work" ?  styles.active : ""}>
                            <Link href="/about/our-work">Our Work</Link>
                        </li>
                        <li className={router.pathname === "/about/contact" ?  styles.active : ""}>
                            <Link href="/about/contact">Contact</Link>
                        </li>
                    </ul>
                </li>
                <li className={`${router.pathname === "/partners" ?  styles.active : ""} ${styles.linkItem}`}>
                    <Link href="/partners">Partners</Link>
                </li>
                <li className={`${router.pathname === "/shop" ?  styles.active : ""} ${styles.linkItem}`}>
                    <Link href="/shop">Impact Shop</Link>
                </li>
                <li className={`${router.pathname === "/donate" ?  styles.active : ""} ${styles.linkItem} ${styles.lastLinkItem}`}>
                    <Link href="/donate">Donate</Link>
                </li>
            </ul>

        </div>
    )
}

export default withRouter(Navbar);