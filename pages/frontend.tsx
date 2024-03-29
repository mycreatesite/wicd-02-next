import type { NextPage } from 'next'
import util from "components/utility/utility"
import styles from 'styles/Under.module.scss'
import Image from 'next/image'
import { motion } from "framer-motion"
import { NextSeo } from 'next-seo'

const Frontend: NextPage = () => {
  let sectionCount = 0
  
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: util.pageTransY
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        ease: util.pageTransBezier,
        duration: util.pageTransDuration
      }}
    >
      <NextSeo
        title="FRONTEND | WHAT I CAN DO."
        openGraph={{
          url: "https://wicd-02-next.vercel.app/frontend",
          title: "FRONTEND | WHAT I CAN DO."
        }}
      />
      <article className={styles.article}>
        <div className={styles.pageTitleSticky}>
          <h1>FRONTEND</h1>
        </div>
        <section className={styles.section}>
          <p className={styles.count}>{( '00' + ++sectionCount ).slice( -2 )}.</p>
          <h2 className={`${styles.title} anim-show-from-bottom js-lax`}>
            <span>HTML5 / CSS3</span>
          </h2>
          <p className={styles.outline}>WEBサイトのデザイン→コーディングまでをワンストップで行います。<br />HTML5によるHTML構造はSEOの根本を担う部分と考えているため、セマンティックな構造を意識しています。<br />またCSS3で豊かになったアニメーションを駆使して様々な表現を試みることが好きで、CodePenやブログ発信で日々アウトプットを行っています。<br />CSSは主にSass（SCSS）、PostCSS、HTML記述はPugなども用います。</p>
          <ul className={styles.listCase}>
            <li><a href="https://myscreate.com/gallery/websites-3/" target="_blank" rel="noopener noreferrer">WEBサイト「Charlotte is Mine – official website」</a></li>
            <li><a href="https://myscreate.com/gallery/websites-5/" target="_blank" rel="noopener noreferrer">LP「IN SOMEWHERE NIGHTS」- Charlotte is Mine</a></li>
            <li><a href="https://codepen.io/mycreatesite/" target="_blank" rel="noopener noreferrer">CodePen - profile</a></li>
          </ul>
          <ul className={styles.listTag}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass(SCSS)</li>
            <li>PostCSS</li>
            <li>Pug</li>
            <li>アニメーション</li>
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.count}>{( '00' + ++sectionCount ).slice( -2 )}.</p>
          <h2 className={`${styles.title} anim-show-from-bottom js-lax`}>
            <span>JavaScript</span>
          </h2>
          <p className={styles.outline}>サイト上のインタラクション / UI実装にJavaScriptを使用しています。<br />プラグインを使用することもありますが、基本的には自身のコードで実現できるよう努めています。<br />使用経験のあるフレームワーク・ライブラリにはjQuery、Vue.js、Nuxt.js、Next.js、Gatsby.jsなどが挙げられます。</p>
          <ul className={styles.listCase}>
            <li><a href="/" target="_blank" rel="noopener noreferrer">ポートフォリオサブサイト（Next.js、当サイト）</a></li>
            <li><a href="https://myscreate.com/gallery/hoppydays/" target="_blank" rel="noopener noreferrer">WEBサイト「HOPPY DAYS」（Next.js）</a></li>
            <li><a href="https://myscreate.com/gallery/tamtam-maker/" target="_blank" rel="noopener noreferrer">Figmaプラグイン「TAMTAM MAKER」</a></li>
            <li><a href="https://codepen.io/mycreatesite/pen/OrZVem" target="_blank" rel="noopener noreferrer">jQueryプラグイン「TextyleFLIP.js」</a></li>
          </ul>
          <ul className={styles.listTag}>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
            <li>Next.js</li>
            <li>Gatsby.js</li>
            <li>プラグイン制作</li>
            <li>UIインタラクション</li>
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.count}>{( '00' + ++sectionCount ).slice( -2 )}.</p>
          <h2 className={`${styles.title} anim-show-from-bottom js-lax`}>
            <span>PHP-WordPress</span>
          </h2>
          <p className={styles.outline}>WordPressは既存テーマのカスタマイズはもちろん、PHPによる独自テーマの制作経験があります。<br />ポートフォリオメインサイトをオリジナルテーマ化し、それを用いてクライアント様のサイトをXAMPP仮想環境にて制作しました。</p>
          <ul className={styles.listCase}>
            <li><a href="https://myscreate.com/" target="_blank" rel="noopener noreferrer">ポートフォリオメインサイト</a></li>
            <li><a href="https://myscreate.com/gallery/websites-3/" target="_blank" rel="noopener noreferrer">WEBサイト「Charlotte is Mine – official website」</a></li>
          </ul>
          <ul className={styles.listTag}>
            <li>WordPress</li>
            <li>PHP</li>
            <li>XAMPP</li>
            <li>オリジナルテーマ</li>
          </ul>
        </section>

        <section className={styles.section}>
          <p className={styles.count}>{( '00' + ++sectionCount ).slice( -2 )}.</p>
          <h2 className={`${styles.title} anim-show-from-bottom js-lax`}>
            <span>Environment</span>
          </h2>
          <p className={styles.outline}>ソースコード管理はGit / GitHub にて管理しております。<br />CodePenはコンポーネントレベルのテスト環境としてよく利用しており、その後の実装やブログでの発信に役立てています。<br />メインPCはWindows、サブとしてMacを所有しています。</p>
          <ul className={styles.listCase}>
            <li><a href="https://github.com/mycreatesite" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://codepen.io/mycreatesite/" target="_blank" rel="noopener noreferrer">CodePen - profile</a></li>
          </ul>
          <ul className={styles.listTag}>
            <li>Windows</li>
            <li>Mac</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Node.js</li>
            <li>Gulp</li>
            <li>webpack</li>
          </ul>
        </section>
        <div className={`${styles.image01} js-laxImg01`}>
          <Image
            src="/frontend01.jpg"
            alt=""
            width={600}
            height={500}
            priority
          />
        </div>
        <div className={`${styles.image02} js-laxImg02`}>
          <Image
            src="/frontend02.jpg"
            alt=""
            width={400}
            height={300}
            priority
          />
        </div>
        <div className={`${styles.image03} js-laxImg03`}>
          <Image
            src="/frontend03.jpg"
            alt=""
            width={400}
            height={400}
            priority
          />
        </div>
      </article>
    </motion.div>
  )
}

export default Frontend
