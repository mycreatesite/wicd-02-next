import 'modern-css-reset/dist/reset.min.css'
import 'styles/globals.scss'
import 'styles/animate.scss'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import { useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import Seo from 'components/seo';
const Lax = require('lax.js')
import Script from 'next/script'

if (typeof window !== "undefined") {

  //初回ロード時にbodyにis-animateを付与
  window.addEventListener("load", () => {
    document.body.classList.add('is-animate')
  });

}

function MyApp({ Component, pageProps, router }: AppProps) {

  //ページ遷移時にis-animateを削除
  useEffect(()=>{
    return ()=>{
      document.body.classList.remove('is-animate')
    }
  },[router.pathname])

  //lax.js
  useEffect(() => {
    if(router.pathname === '/') return;
    Lax.init();
    Lax.addDriver("scrollY", () => {
      return window.scrollY;
    });
    Lax.addElements(
      ".js-lax",
      {
        scrollY: {
          translateY: [
            ['elInY', 'elOutY'],
            [0, -50]
          ],
        }
      }
    );
    Lax.addElements(
      ".js-laxImg01",
      {
        scrollY: {
          translateY: [
            [0, 'pageHeight'],
            [0, -500]
          ],
        }
      }
    );
    Lax.addElements(
      ".js-laxImg02",
      {
        scrollY: {
          translateY: [
            [0, 'pageHeight'],
            [0, -200]
          ],
        }
      }
    );
  }, [router.pathname]);

  return (
    <>
      <Script
        async src="https://www.googletagmanager.com/gtag/js?id=G-ED8LWB7L7Y"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ED8LWB7L7Y');
        `}
      </Script>
      <Seo />
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}

export default MyApp
