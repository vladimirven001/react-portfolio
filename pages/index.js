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
            <p>software engineering student at mcgill university, in montreal</p>
          </div>

          <Footer />
        </div>
      </div>
    </div>

  )
}
