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
          <div className="center">
            <h1>Vladimir Venkov</h1>
          </div>
          <Footer />
        </div>
      </div>
    </div>

  )
}
