import React from "react";
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesEducation from '../styles/Education.module.css'

const education = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
          <div className={stylesEducation.textTitle}>
            <h1 style={{fontWeight:"normal"}}>education</h1>
          </div>

          <div className={stylesEducation.container}>
            <div className={stylesEducation.textSubtitle}>
              <p>this is a breakdown of my education credits:</p>
            </div>
            <div className={stylesEducation.progressBarWrapper}>
              <div className={stylesEducation.main}>
                <div className={stylesEducation.progressbar}>
                  <div className={stylesEducation.first}>
                    <p className={stylesEducation.preCardTextSubtitle}>33%</p>
                  </div>
                  <div className={stylesEducation.second}>
                    <p className={stylesEducation.preCardTextSubtitle}>55%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={stylesEducation.bottomContainer}>
              <div className={stylesEducation.firstCard}>
                <div className={stylesEducation.cardContent}>
                    <p className={stylesEducation.preCardTextSubtitle}>10/2023</p>
                    <div className={stylesEducation.hoverContent}>
                      <p className={stylesEducation.cardTextSubtitle} style={{fontWeight:"bold"}}>10/2023</p>
                      <div className={stylesEducation.textList}>
                        <p style={{color: "#dedede", fontFamily:"consolas", fontWeight:"bold"}}>01.{"\u00a0"}</p>
                        <p style={{color: "#dedede"}}> these are the credits i have accumulated as of now</p>
                      </div>
                      <div className={stylesEducation.textList}>
                        <p style={{color: "#dedede", fontFamily:"consolas", fontWeight:"bold"}}>02.{"\u00a0"}</p>
                        <p style={{color: "#dedede"}}> i have acquired 37 credits out of the 113 required for my program</p>
                      </div>
                    </div>
                </div>
              </div>
              <div style={{width:"10vw"}}></div>
              <div className={stylesEducation.secondCard}>
                <div className={stylesEducation.cardContent}>
                    <p className={stylesEducation.preCardTextSubtitle}>05/2024</p>
                    <div className={stylesEducation.hoverContent}>
                      <p className={stylesEducation.cardTextSubtitle} style={{fontWeight:"bold"}}>05/2024</p>
                      <div className={stylesEducation.textList}>
                        <p style={{color: "#dedede", fontFamily:"consolas", fontWeight:"bold"}}>01.{"\u00a0"}</p>
                        <p style={{color: "#dedede"}}> these are the credits i will have accumulated as of may 2024</p>
                      </div>
                      <div className={stylesEducation.textList}>
                        <p style={{color: "#dedede", fontFamily:"consolas", fontWeight:"bold"}}>02.{"\u00a0"}</p>
                        <p style={{color: "#dedede"}}> i will have acquired 62 out of the 113 required credits</p>
                      </div>
                    </div>
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

export default education;

