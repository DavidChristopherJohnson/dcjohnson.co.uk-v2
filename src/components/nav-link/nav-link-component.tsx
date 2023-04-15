import Link from 'next/link';
import styles from './nav-link-component.module.scss';

export type NavLinkProps = {
    text: string,
    href: string,
    active?: boolean
}

export default function NavLink({ text, href, active }: NavLinkProps) {
    return <Link href={href} className={`${styles.navlink} ${active ? styles.active : ""}`}>
        {text}
    </Link>


}