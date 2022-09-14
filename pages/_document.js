import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet"
        />
        <link rel="icon" href="favicon.ico"/>
        <link rel="apple-touch-icon" href="touchicon.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}