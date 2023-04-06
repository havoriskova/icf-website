
import Link from 'next/link';
import styles from './storiesGrid.module.css';


export default function BlogPostOne() {

    return (
            <div className='contentWidth'>
                
                stories grid
                <Link href='/blog/blog-post-1'>blog post 1</Link>

                
            </div>
    )
}