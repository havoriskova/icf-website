import Link from "next/link";
import Image from "next/image";
import styles from './navbar.module.css';
import {withRouter} from "next/router";



function Navbar({router}) {

    return(
        
        <div className={styles.navbarContainer}>
       
            
            <ul className={styles.flexRow}>
                <li className={router.pathname === '/' ?  styles.active : ''} ><Link href='/'><Image alt='logo' src='/icf_logo.ico.png'
                width={70} height={55}/></Link></li>

                <li className={`${router.pathname === '/get-involved' ? styles.active : ''} text-success`}><Link href='/get-involved'>Get involved</Link></li>
                <li className={router.pathname === '/about' ? styles.active : ''}><Link href='/about'>About</Link>
                    <ul className={styles.hidden}>
                        <li className={router.pathname === '/about/team' ?  styles.active : ''}><Link href='/about/team'>Team</Link></li>
                        <li className={router.pathname === '/about/our-work' ?  styles.active : ''}><Link href='/about/our-work'>Our Work</Link></li>
                        <li className={router.pathname === '/about/contact' ?  styles.active : ''}><Link href='/about/contact'>Contact</Link></li>
                    </ul>
                </li>
                <li className={router.pathname === '/partners' ?  styles.active : ''}><Link href='/partners'>Partners</Link></li>
                <li className={router.pathname === '/shop' ?  styles.active : ''}><Link href='/shop'>Impact Shop</Link></li>
                <li className={router.pathname === '/donate' ?  styles.active : ''}><Link href='/donate'>Donate</Link></li>
            </ul>

           
        </div>
    )
}

export default withRouter(Navbar);