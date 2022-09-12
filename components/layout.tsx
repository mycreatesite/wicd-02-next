import { ReactNode } from 'react';
import Header from 'components/header'
import Footer from 'components/footer'
import Container from 'components/container'

type Props = {
  children?: ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <>
      <Header/>
      <main>
        <Container>
          {children}
        </Container>
      </main>
      <Footer/>
    </>
  )
}  
export default Layout