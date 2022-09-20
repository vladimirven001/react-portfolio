import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Vladimir Venkov</title>
          <link rel="icon" href='/Letter-V.ico' />
        </Head>
        <div className={styles.principal}>
          <div className={styles.textTitle}>
            <h1 style={{fontWeight:"normal"}}>hey, vlad here</h1>
          </div>
          <div className={styles.textSubtitle}>
            <p style={{fontFamily: "consolas"}}>software engineering student at mcgill university, montreal</p>
          </div>
          <div className={styles.textList} style={{paddingTop: "15vh"}}>
            <p style={{color: "#3DB8A5", fontFamily:"consolas"}}>01.{"\u00a0"}</p>
            <p>experienced in salesmanship, leadership, and more{"\u00a0"}</p>
            <a href="/experience" className={styles.textLink}>{"<"}learn more{">"}</a>
          </div>
          <div className={styles.textList}>
            <p style={{color: "#3DB8A5", fontFamily:"consolas"}}>02.{"\u00a0"}</p>
            <p>currently in the first year of a four year program of co-op software engineering{"\u00a0"}</p>
            <a href="/education" className={styles.textLink}>{"<"}learn more{">"}</a>
          </div>
          <div className={styles.textList}>
            <p style={{color: "#3DB8A5", fontFamily:"consolas"}}>03.{"\u00a0"}</p>
            <p>good knowledge in python, c#, html, css and more{"\u00a0"}</p>
            <a href="/skills" className={styles.textLink}>{"<"}learn more{">"}</a>
          </div>

          <Footer />
        </div>
      </div>
    </div>

  )
}
