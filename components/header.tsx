import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/header.module.scss'
import Container from 'components/container'
const Header = () => {
  return (
    <header className={`${styles.header} header`}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
                <a><Image priority src="/logo.svg" alt="WHAT I CAN DO" width={72} height={18} /></a>
            </Link>
          </div>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <Link href="/">
                <a className={'hover-text-translation'}><span data-text="TOP">TOP</span></a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/design">
                <a className={'hover-text-translation'}><span data-text="DESIGN">DESIGN</span></a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/frontend">
                <a className={'hover-text-translation'}><span data-text="FRONTEND">FRONTEND</span></a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}  
export default Header