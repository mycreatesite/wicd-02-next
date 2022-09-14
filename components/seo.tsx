import { DefaultSeo } from 'next-seo';

const Seo = () => {
  return (
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
  )
}  
export default Seo