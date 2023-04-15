import { ReactNode } from 'react';
import Header from '@/components/header/header-component'
import NavComponent from '@/components/nav/nav-component'
import FooterComponent from '@/components/footer/footer-component'
import styles from './default-layout.module.scss';

export default function DefaultLayout({ children }: { children?: ReactNode }) {
    return <>
        <Header />
        <NavComponent />
        <main className={styles.main}>
            {children}
        </main>
        <FooterComponent />
    </>
}