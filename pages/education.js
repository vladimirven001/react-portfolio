import React from "react";
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import EducationBar from "../components/ProgressBar";

const education = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
            <div>
              <h1>Education</h1>
              <EducationBar/> 
            </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default education;

