import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Vladimir Venkov</title>
          <link rel="icon" href='/favicon.ico' />
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
            <p>many projects in relation with software engineering{"\u00a0"}</p>
            <a href="/projects" className={styles.textLink}>{"<"}learn more{" />"}</a>
          </div>
          <div className={styles.textList}>
            <p style={{color: "#3DB8A5", fontFamily:"consolas"}}>02.{"\u00a0"}</p>
            <p>currently in the second year of a four year co-op program{"\u00a0"}</p>
            <a href="/education" className={styles.textLink}>{"<"}learn more{" />"}</a>
          </div>
          <div className={styles.textList}>
            <p style={{color: "#3DB8A5", fontFamily:"consolas"}}>03.{"\u00a0"}</p>
            <p>good knowledge in python, java, html, css and more{"\u00a0"}</p>
            <a href="/skills" className={styles.textLink}>{"<"}learn more{" />"}</a>
          </div>

          <Footer />
        </div>
      </div>
    </div>

  )
}
