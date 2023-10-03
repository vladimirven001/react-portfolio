import React from 'react';
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesProjects from '../styles/Projects.module.css'
import CardContainer from '../components/Slider'

const projects = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
          <div className={stylesProjects.textTitle}>
            <h1 style={{fontWeight:"normal"}}>projects</h1>
          </div>
          <CardContainer cards={ cardsData } />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default projects;
