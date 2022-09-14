import type { NextPage } from 'next'
import util from "components/utility/utility"
import styles from 'styles/Under.module.scss'
import { motion } from "framer-motion";

const Design: NextPage = () => {
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
      exit={{
        opacity: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: util.pageTransDuration
      }}
    >
      <article className={styles.article}>
        <div className={styles.pageTitleSticky}>
          <p>DESIGN</p>
        </div>
        <section className={styles.section}>
          <h1 className={`${styles.title} anim-show-from-bottom`}>
            <span>WEB </span>
            <span>DESIGN</span>
          </h1>
          <p className={styles.outline}>バナー類全般やサイト・LPデザインの経験があります。<br />WEBバナー系の制作において、ECサイト訴求画像ではその多くが amazon / yahoo / 楽天 で売上1位を達成しています。<br />同様に、サイト・LPデザインも好評を頂いています。</p>
          <ul className={styles.listCase}>
            <li><a href="https://myscreate.com/gallery/websites-3/" target="_blank" rel="noopener noreferrer">WEBサイト「Charlotte is Mine – official website」</a></li>
            <li><a href="https://myscreate.com/gallery/websites-5/" target="_blank" rel="noopener noreferrer">LP「IN SOMEWHERE NIGHTS」- Charlotte is Mine</a></li>
            <li><a href="https://myscreate.com/gallery/graphics-2/" target="_blank" rel="noopener noreferrer">EC訴求画像「GACHILOCK」</a></li>
          </ul>
          <ul className={styles.listTag}>
            <li>photoshop</li>
            <li>illustrator</li>
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>premiere pro</li>
            <li>ECサイト</li>
            <li>WEBサイト</li>
            <li>バナー</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h1 className={`${styles.title} anim-show-from-bottom`}>
            <span>EDITORIAL</span>
          </h1>
          <p className={styles.outline}>ロゴ・チラシ・フライヤー・パッケージからCDジャケット・オリジナルグッズデザイン等の印刷物デザインが可能です。<br />制作物によりますが、ご希望により印刷業者への入稿まで対応しています。<br />ロゴに関してはフリーでお仕事を頂き始めた当初、ロゴコンペ【採用】ランキングにて、2017年04月第3週：第1位 / 2017年04月月間：第7位を獲得しました。<br />ほか変わったものとしては、ウォールアート制作などの経験があります。</p>
          <ul className={styles.listCase}>
            <li><a href="https://myscreate.com/gallery/printed-matter/" target="_blank" rel="noopener noreferrer">商品パッケージ「ELECTIVE CHARGER」</a></li>
            <li><a href="https://myscreate.com/gallery/printed-matter-3/" target="_blank" rel="noopener noreferrer">ウォールアート「SUMMER BALL 2018」</a></li>
            <li><a href="https://myscreate.com/gallery/printed-matter-2/" target="_blank" rel="noopener noreferrer">名刺「Kii Point Inc.」</a></li>
            <li><a href="https://myscreate.com/gallery/logos-2/" target="_blank" rel="noopener noreferrer">ロゴ「F channel」</a></li>
          </ul>
          <ul className={styles.listTag}>
            <li>photoshop</li>
            <li>illustrator</li>
            <li>DTP</li>
            <li>ロゴ</li>
            <li>パッケージ</li>
            <li>フライヤー</li>
            <li>ポスター</li>
            <li>看板</li>
            <li>CDジャケット</li>
            <li>グッズ</li>
            <li>イラスト</li>
            <li>名刺</li>
          </ul>
        </section>
      </article>
    </motion.div>
  )
}

export default Design
