import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MyApp from './_app'


export default function Home() {
  return (
    <div>
      <Head>

        <title>Vladimir Venkov</title>
        <link rel="icon" href='/Letter-V.ico' />

      </Head>
          
      <main>

        <h1 style={{textAlign: "center"}} >Bonjour</h1>
        
        <Footer />

      </main>


    </div>
  )
}
