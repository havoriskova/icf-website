import Link from "next/link";
import Image from "next/image";


export default function Navbar() {

    return(
        <div>
            
            <ul>
                <li><Link href='/'><Image alt='logo' src='/icf_logo.ico.png'
                width={70} height={55}/></Link></li>

                <li><Link href='/get-involved'>Get involved</Link></li>
                <li><Link href='/about'>About</Link>
                    <ul>
                        <li><Link href='/about/team'>Team</Link></li>
                        <li><Link href='/about/our-work'>Our Work</Link></li>
                        <li><Link href='/about/contact'>Contact</Link></li>
                    </ul>
                </li>
                <li><Link href='/news'>News</Link></li>
                <li><Link href='/shop'>Impact Shop</Link></li>
                <li><Link href='/donate'>Donate</Link></li>
            </ul>
        </div>
    )
}