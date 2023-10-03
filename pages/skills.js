import React from "react";
import Footer from '../components/Footer'
import stylesHoneycomb from '../styles/Honeycomb.module.css'
import stylesMain from '../styles/Home.module.css'
import stylesSkills from '../styles/Skills.module.css'

const skills = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
              
          <div className={stylesSkills.textTitle}>
            <h1 style={{fontWeight:"normal"}}>skills</h1>
          </div>
          <div>
            <div className={stylesHoneycomb.honey}>
              <div className={stylesHoneycomb.row_1}>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  />
                </div>
              </div>

              <div className={stylesHoneycomb.row_2}>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"  />
                </div>
              </div>

              <div className={stylesHoneycomb.row_3}>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  />
                </div>
              </div>
              <div className={stylesHoneycomb.row_4}>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" />
                </div>
                <div className={stylesHoneycomb.item}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-plain.svg" />
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

export default skills;
