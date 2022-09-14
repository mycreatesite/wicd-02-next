import 'modern-css-reset/dist/reset.min.css'
import 'styles/globals.scss'
import 'styles/animate.scss'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import { useEffect } from 'react'
import { AnimatePresence } from "framer-motion"
import { DefaultSeo } from 'next-seo';

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
      <DefaultSeo
        defaultTitle="WHAT I CAN DO."
        description="My name is Masayoshi Kawashima,as known as ma-ya's CREATE."
        openGraph={{
          type: "website",
          title: "WHAT I CAN DO.",
          description: "My name is Masayoshi Kawashima,as known as ma-ya's CREATE.",
          site_name: "WHAT I CAN DO.",
          url: "https://wicd-02-next.vercel.app/",
          images: [
            {
              url: "https://wicd-02-next.vercel.app/ogp.png",
              width: 1200,
              height: 630,
              alt: 'WHAT I CAN DO.',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@hello_myscreate',
          site: '@hello_myscreate',
          cardType: "summary_large_image",
        }}
			/>
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  )
}

export default MyApp
