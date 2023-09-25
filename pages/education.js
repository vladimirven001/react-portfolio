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
                  </div>
                  <div className={stylesEducation.second}>
                  </div>
                </div>
              </div>
            </div>
            <div className={stylesEducation.bottomContainer}>
              {/* <div className={stylesEducation.hiddenOne}>
                <div className={stylesMain.textList}>
                  <p style={{color: "#339989", fontFamily:"consolas"}}>01.{"\u00a0"}</p>
                  <p> these are the credits i have accumulated so far</p>
                </div>
                <div className={stylesMain.textList}>
                  <p style={{color: "#339989", fontFamily:"consolas"}}>02.{"\u00a0"}</p>
                  <p> i have acquired 37 credits out of the 113 required for my program</p>
                </div>
              </div> */}
              <div class="card">
                <div class="card-content">
                    <p class="card-text">Cat</p>
                    <div class="hover-content">
                        <h2>Cat</h2>
                        <p>A cat is a small domesticated carnivorous mammal. It is known for its agility, playfulness, and often its affection towards humans.</p>
                    </div>
                </div>
              </div>
              <div className={stylesEducation.card}>
                <div className={stylesEducation.cardContent}>
                    <p className={stylesEducation.preCardTextSubtitle}>05/2024</p>
                    <p className={stylesEducation.preCardTextSubtitle}>55%</p>
                    <div className={stylesEducation.hoverContent}>
                      <p className={stylesEducation.cardTextSubtitle} style={{fontWeight:"bold"}}>05/2024</p>
                      <div className={stylesMain.textList}>
                        <p style={{color: "#131515", fontFamily:"consolas"}}>01.{"\u00a0"}</p>
                        <p style={{color: "#131515"}}> these are the credits i will have accumulated as of may 2024</p>
                      </div>
                      <div className={stylesMain.textList}>
                        <p style={{color: "#131515", fontFamily:"consolas"}}>02.{"\u00a0"}</p>
                        <p style={{color: "#131515"}}> i will have acquired 62 credits out of the 113 required for my program</p>
                      </div>
                    </div>
                </div>
              </div>
              {/* <div className={stylesEducation.hiddenTwo}>
                <div className={stylesMain.textList}>
                  <p style={{color: "#3db8a5", fontFamily:"consolas"}}>01.{"\u00a0"}</p>
                  <p> these are the credits i will have accumulated as of may 2024</p>
                </div>
                <div className={stylesMain.textList}>
                  <p style={{color: "#3db8a5", fontFamily:"consolas"}}>02.{"\u00a0"}</p>
                  <p> i will have acquired 62 credits out of the 113 required for my program</p>
                </div>
              </div> */}
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default education;

