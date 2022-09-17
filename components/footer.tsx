import styles from 'styles/footer.module.scss'
import Container from 'components/container'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const Footer = () => {
  return (
    <footer className={`${styles.footer} footer`}>
      <Container>
        <nav className={styles.nav}>
          <p className={styles.copy}>© Copyright 2022 │ ma-ya&apos;s CREATE All rights reserved.</p>
          <a className={`${styles.link} hover-text-translation`} href="https://myscreate.com/" target="_blank" rel="noopener noreferrer">
            <span data-text="GO TO MAIN WEBSITE">GO TO MAIN WEBSITE</span>
            <OpenInNewIcon />
          </a>
        </nav>
      </Container>
    </footer>
  )
}  
export default Footer