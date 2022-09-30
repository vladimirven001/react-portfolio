import React from "react";
import Footer from '../components/Footer'
import styles from '../styles/Honeycomb.module.css'
import styles2 from '../styles/Home.module.css'

const skills = () => {
  return (
    <>
      <div className={styles2.container}>
        <div className={styles2.principal}>
              
          <div>
            <div className={styles.honey}>
              <div className={styles.row_1}>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  />
                </div>
              </div>

              <div className={styles.row_2}>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"  />
                </div>
              </div>

              <div className={styles.row_3}>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"  />
                </div>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  />
                </div>
              </div>
              <div className={styles.row_4}>
                <div className={styles.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
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
