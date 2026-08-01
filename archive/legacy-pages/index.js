import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import styles from "../../styles/Home.module.css";

export default function LegacyHome() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Vladimir Venkov</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className={styles.principal}>
          <div className={styles.textTitle}>
            <h1 style={{ fontWeight: "normal" }}>hey, vlad here</h1>
          </div>
          <div className={styles.textSubtitle}>
            <p style={{ fontFamily: "consolas" }}>
              software engineering student at mcgill university, montreal
            </p>
          </div>
          <div className={styles.textList} style={{ paddingTop: "15vh" }}>
            <p>check out my{"\u00a0"}</p>
            <Link href="/projects" className={styles.textLink}>
              {"<"}projects{" />"}
            </Link>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
