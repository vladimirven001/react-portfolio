import Head from 'next/head'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>

        <title>Vladimir Venkov</title>
        <link rel="icon" href='/Letter-V.ico' />

      </Head>

         
      <main>
        <div>
          <div>
            
            <h1 style={{textAlign: "center"}} >Vladimir Venkov</h1>
        
          </div>
        </div>

        <Footer />

      </main>


    </div>
  )
}
