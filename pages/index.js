import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div>
      <Head>

        <title>Vladimir Venkov</title>
        <link rel="icon" href='/Letter-V.ico' />

      </Head>
      
      <main>

        <Header />
        <h1>Bonjour</h1>
        <Footer />

        

      </main>


    </div>
  )
}
