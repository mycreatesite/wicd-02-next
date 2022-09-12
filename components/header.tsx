import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/header.module.scss'
import Container from 'components/container'
const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
                <a><Image src="/logo.svg" alt="WHAT I CAN DO" width={72} height={18} /></a>
            </Link>
          </div>
          <ul className={styles.navList}>
            <li className={styles.listItem}>
              <Link href="/">
                <a>TOP</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/DESIGN">
                <a>DESIGN</a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/FRONTEND">
                <a>FRONTEND</a>
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}  
export default Header