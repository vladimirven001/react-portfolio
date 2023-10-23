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
                  <p>{"\u003e"} WatchMatch is a website that recommends alternatives to watches that fit your preferences, so that they can also fit your budget</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it works:</p>
                  <p>{"\u003e"} WatchMatch calculates the similarity coefficient between the given watch and every watch in a database of over 36,000 watches</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it's built:</p>
                  <p>{"\u003e"} The backend is coded in Python and uses components of sklearn in order to calculate the similarity between the watches</p>
                  <div>
                    <p>Links:</p>
                  </div>
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
                  <img style={{maxHeight:'15vh'}} src='https://uc4f36bd163a51f00ce21da873a6.previews.dropboxusercontent.com/p/thumb/ACEYV3CmKUgCQlGeZ22M21tqxPS81BgtD9AGCBaziN3-MEjVlXxMpg4DvZHdhiwQCYU9tdz15qe5A8ApY_2TFb7Ph-0U2X1XfmodMxdFBQf-bxccpQaZ1jnCRuF3qhTNKCb3NkidURuYPHdl173aTQLWlXHBX_hMHEgGedlDUHTDID_wnF9i9VnbPUtOpX_llDHaqNP6sucMpyUS9m2W4moYId80PevavVfI8zSBgtjVtbDmYLyW4vA1-BYqkDJ5ltP8IHkFnkVQzvf_rg_I11xcDK-FlitWE5JAlYjIYWqy-uM-09qcKDAeJ5JZTBxF8iUvoF-naRYPjkuDW2VGQBkyQLxa986YxZRbV62RWj1o2vqqN1vyiWoNBwync-0414Y/p.png'></img>
                </div>
                <div className={stylesProjects.textContainer}>
                  <p style={{fontWeight:"bold"}}>What is is:</p>
                  <p>{"\u003e"} This Website is my Portfolio, used to present my project, my education, and my skills</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it's built:</p>
                  <p>{"\u003e"} This website uses Next.js and React in order to create interactive components and integrate them into dynamic web pages</p>
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
                  <p>{"\u003e"} NimGame is a simple mathematical game which uses matches in which you play against the computer, your goal is to win, and the computer's goal is to cheat and win, so you can guess the outcome...</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it works:</p>
                  <p>{"\u003e"} NimGame computes the mathematically right move for each position by converting the amount of matches to binary and deciding whether it should start with the first move</p>
                  <p>{"\u00a0"}</p>
                  <p style={{fontWeight:"bold"}}>How it's built:</p>
                  <p>{"\u003e"} This application is built in C# with .NET 7.0</p>
                  <p>{"\u003e"} The mathematics behind it are based on the book <a href='https://annarchive.com/files/Winning%20Ways%20for%20Your%20Mathematical%20Plays%20V1.pdf' className={stylesMain.textLink}>Winning Ways for Your Mathematical Plays</a>, by Elwyn R. Berlekamp</p>
                </div>
                <div className={stylesProjects.imageContainer}>
                  <img src='https://previews.dropbox.com/p/thumb/ACFJHsbCKCZXEKBQ-CtIe_eUPJhytS7pFcrn-9blMJvakxUHACdo25rp1e9C0732ey14jRT2P5hS3QhieiG_exZ2u0m8ZrzuxErzz9M2CUff5uDORCoNY1N2Ae8G6lf80ZWe6ka8vlkGWa9bAXw-g1vhwAqr_Gl7aDpOONlBsS3vR0w70SxlzzoulF5abcZu8TdENDYYIjTs-Sc5-99KkrRzxckbRsY9GkPF9afYf14UOeSM9MUg1uMwfTvO3p_88J3ZHk-f6n-7vzDxg2ivz5QZ3yqjBWD6bIELPhGtwyflUsqO8zSucPPY6wNxFHM_XCbTuPUzVrOLZuqTCm5LAU5O/p.png'></img>
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
