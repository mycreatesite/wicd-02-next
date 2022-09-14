import 'modern-css-reset/dist/reset.min.css'
import 'styles/globals.scss'
import 'styles/animate.scss'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import { useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import Seo from 'components/seo';

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

  return (
    <>
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
