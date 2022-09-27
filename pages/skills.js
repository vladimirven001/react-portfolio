import React from "react";
import Footer from '../components/Footer'
import styles from '../styles/Honeycomb.module.css'
import styles2 from '../styles/Home.module.css'

const skills = () => {
  return (
    <>
      <div className={styles2.container}>
        <div className={styles2.principal}>
          <div className="center">
            <h2>skills</h2>
          </div>
      
          <div>
            <div className={styles.honey}>
              <div className={styles.row_1}>
                <div className={styles.item}>

                </div>
                <div className={styles.item}>

                </div>
                <div className={styles.item}>

                </div>
              </div>

              <div className={styles.row_2}>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
              </div>

              <div className={styles.row_3}>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
                <div className={styles.item}>
              
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        
      </div>
    </>
  );
};

export default skills;
