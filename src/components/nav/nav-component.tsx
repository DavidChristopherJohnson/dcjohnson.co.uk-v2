import { useState } from 'react';
import styles from './nav-component.module.scss';
import NavLink from '../nav-link/nav-link-component';
import { idText } from 'typescript';

const NAV_BAR_LIST = [
    { text: "Home", href: "/" },
    { text: "Skills", href: "/skills" },
    { text: "Testimonials", href: "/testimonials" },
    { text: "Book Reviews", href: "/book-reviews" },
    { text: "Mentorship", href: "/mentorship" }
]

export default function NavComponent() {
    const [activeIndex, setActiveIndex] = useState(0);

    return <nav className={styles.navbar}>
        {NAV_BAR_LIST.map((item, idx) => (
            <div onClick={() => setActiveIndex(idx)}>
                <NavLink key={item.text} active={activeIndex === idx} {...item} />
            </div>
        ))}
    </nav>
}