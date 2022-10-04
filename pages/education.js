import React from "react";
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import ProgressBar from '../components/ProgressBar'

const education = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
            <div>
              <ProgressBar />
            </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default education;

