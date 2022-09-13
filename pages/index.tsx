import type { NextPage } from 'next'
import styles from 'styles/Top.module.scss'
import Link from 'next/link'
import React, { useEffect } from "react";

if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    document.body.classList.add('is-animate')
  });
}

const Top: NextPage = () => {
  return (
      <div className={styles.mainvisual}>
        <div className={styles.bgVideo}>
          <video id={'video'} src="video.mp4" loop autoPlay playsInline muted></video>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>WHAT <br className={'d-none-pc'}/>I CAN <br className={'d-none-pc'}/>DO.</h1>
          <p className={styles.outline}>My name is Masayoshi Kawashima,<br />as known as ma-ya&apos;s CREATE.</p>
          <div className={styles.btnGroup}>
            <Link href="/design">
              <a className={'btn-outline'}>DESIGN</a>
            </Link>
            <Link href="/frontend">
              <a className={'btn-outline'}>FRONTEND</a>
            </Link>
          </div>
        </div>
      </div>
      
  )
}

export default Top
