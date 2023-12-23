import React from 'react';
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesProjects from '../styles/Projects.module.css'
import '../public/thisWebsite.png'

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
              <div className={stylesProjects.projectTitle}>
                <p>WatchMatch (work in progress...)</p>
              </div>
              <div className={stylesProjects.elementsContainer}>
                <div className={stylesProjects.textContainer}>
                  <p style={{fontWeight:"bold"}}>What is is:</p>
                  <p>{"\u003e"} WatchMatch is a website that recommends alternatives to watches that fit your preferences, so that they can also fit your budget.</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it works:</p>
                  <p>{"\u003e"} WatchMatch calculates the similarity coefficient between the given watch and every watch in a database of over 36,000 watches.</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it{"\u0027"}s built:</p>
                  <p>{"\u003e"} The backend is coded in Python and uses components of sklearn in order to calculate the similarity between the watches.</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>Github:</p>
                  <a href="https://github.com/vladimirven001/WatchMatch/">
                    <img style={{maxHeight:"50px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
                  </a>
                </div>
                <div className={stylesProjects.imageContainer}>
                  
                </div>
              </div>              
            </div>
            <div className={stylesProjects.project}>
              <div className={stylesProjects.projectTitle}>
                <p>This website</p>
              </div>
              <div className={stylesProjects.elementsContainer}>
                <div className={stylesProjects.imageContainer}>
                  <img src='NimGame.png'></img>
                </div>
                <div className={stylesProjects.textContainer}>
                  <p style={{fontWeight:"bold"}}>What is is:</p>
                  <p>{"\u003e"} This Website is my Portfolio. I use it to present the projects i{"\u0027"}ve worked on, the skills i{"\u0027"}ve learned, and more information about me.</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it{"\u0027"}s built:</p>
                  <p>{"\u003e"} This website uses Next.js and React in order to create an interactive and dynamic web environment.</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>Github:</p>
                  <a href="https://github.com/vladimirven001/react-portfolio/">
                    <img style={{maxHeight:"50px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
                  </a>
                </div>
              </div> 
            </div>
            <div className={stylesProjects.project}>
              <div className={stylesProjects.projectTitle}>
                <p>Nim and Marienbad Game</p>
              </div>
              <div className={stylesProjects.elementsContainer}>
                <div className={stylesProjects.textContainer}>
                  <p style={{fontWeight:"bold"}}>What is is:</p>
                  <p>{"\u003e"} NimGame is a simple mathematical game which uses matches in which you play against the computer, your goal is to win, and the computer{"\u0027"}s goal is to cheat and win, so you can guess the outcome...</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it works:</p>
                  <p>{"\u003e"} NimGame computes the mathematically right move for each position by converting the amount of matches to binary and deciding whether it should start with the first move.</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it{"\u0027"}s built:</p>
                  <p>{"\u003e"} This application is built in C# with .NET 7.0</p>
                  <p>{"\u003e"} The mathematics behind it are based on the book <a href='https://annarchive.com/files/Winning%20Ways%20for%20Your%20Mathematical%20Plays%20V1.pdf' className={stylesMain.textLink}>Winning Ways for Your Mathematical Plays</a>, by Elwyn R. Berlekamp</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>Github:</p>
                  <a href="https://github.com/vladimirven001/NimGame/">
                    <img style={{maxHeight:"50px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
                  </a>
                </div>
                <div className={stylesProjects.imageContainer}>
                  <img src='thisWebsite.png'></img>
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

export default projects;
