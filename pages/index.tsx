import type { NextPage } from 'next'
import util from "components/utility/utility"
import styles from 'styles/Top.module.scss'
import Link from 'next/link'
import { motion } from "framer-motion";

const Top: NextPage = () => {

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        ease: util.pageTransBezier,
        duration: util.pageTransDuration
      }}
    >
      <div className={`${styles.mainvisual} mainvisual`}>
        <div className={styles.bgVideo}>
          <video id={'video'} src="video.mp4" loop autoPlay playsInline muted></video>
        </div>
        <div className={`${styles.content} content`}>
          <h1 className={`${styles.title} title`}>
            <div className='anim-show-from-bottom'><span>WHAT </span></div>
            <div className='anim-show-from-bottom'><span>I CAN </span></div>
            <div className='anim-show-from-bottom'><span className='color-blue-green'>DO.</span></div>
          </h1>
          <div className={`${styles.outline} outline`}>
            <p className='anim-show-from-bottom'><span>My name is Masayoshi Kawashima,</span></p>
            <p className='anim-show-from-bottom'><span>as known as ma-ya&apos;s CREATE.</span></p>
          </div>
          <div className={`${styles.btnGroup} btnGroup anim-show-from-bottom`}>
            <Link href="/design">
              <a className='btn-outline anim-show-from-bottom'>DESIGN</a>
            </Link>
            <Link href="/frontend">
              <a className='btn-outline'>FRONTEND</a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Top
