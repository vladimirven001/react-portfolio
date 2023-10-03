import React from 'react';
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesProjects from '../styles/Projects.module.css'

const projects = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
          <div className={stylesProjects.textTitle}>
            <h1 style={{fontWeight:"normal"}}>projects</h1>
          </div>
          <div className={stylesProjects.container}>
            <div className={stylesProjects.project}>
              <p>WatchMatch (work in progress...)</p>
              <p>WatchMatch is a Website that recommends you watches based on your preferences, that also fit your budget</p>
            </div>
            <div className={stylesProjects.project}>
              This is the second project
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default projects;
