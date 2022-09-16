import Navbar from '../components/Navbar'
import "../styles/globals.css"
import styles from '../styles/Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <div>
        <div className={styles.pagecontainer}>

        </div>
      </div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
