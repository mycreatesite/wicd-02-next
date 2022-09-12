import styles from 'styles/footer.module.scss'
import Container from 'components/container'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <nav className={styles.nav}>
          <p>© Copyright 2022 │ ma-ya&apos;s CREATE All rights reserved.</p>
          <a href="https://myscreate.com/" target="_blank" rel="noopener noreferrer">GO TO MAIN WEBSITE</a>
        </nav>
      </Container>
    </footer>
  )
}  
export default Footer