import React from "react";
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesEducation from '../styles/Education.module.css'
import ProgressBar from "../components/ProgressBar";

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
              <div>
                <p> these are the credits i have accumulated so far</p>
                <p> i have acquired 37 credits out of the 113 required for my program</p>
              </div>
              <div>
                <p> these are the credits i will have accumulated as of may 2024</p>
                <p> i will have acquired 62 credits out of the 113 required for my program</p>
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

