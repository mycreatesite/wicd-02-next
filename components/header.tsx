import Image from 'next/image'
import Link from 'next/link'
import styles from 'styles/header.module.scss'
import Container from 'components/container'
import Logo from 'components/logoSvg'
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
const Header = () => {
  return (
    <header className={`${styles.header} header`}>
      <Container>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Link href="/">
                <a><Logo /></a>
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
        <div className={styles.themeToggle}>
          <ModeNightOutlinedIcon />
          <div className={styles.toggleBtn}>
            <input id="toggle" className={styles.toggleInput} type='checkbox' />
            <label htmlFor="toggle" className={styles.toggleLabel}/>
          </div>
          <LightModeOutlinedIcon />
        </div>
      </Container>
    </header>
  )
}  
export default Header