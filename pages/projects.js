import React from 'react';
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesExperience from '../styles/Contact.module.css';


const projects = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
          <div className={stylesExperience.textTitle}>
            <h1 style={{fontWeight:"normal"}}>projects</h1>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default projects;
