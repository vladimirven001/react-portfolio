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
            <h1 style={{fontWeight:"normal"}}>Education</h1>
          </div>

          <ProgressBar />
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default education;

