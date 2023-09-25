import React from 'react';
import Footer from '../components/Footer'
import stylesMain from '../styles/Home.module.css'
import stylesContact from '../styles/Contact.module.css';
import ContactForm from '../components/ContactForm'


const contact = () => {
  return (
    <>
      <div className={stylesMain.container}>
        <div className={stylesMain.principal}>
          <div className={stylesContact.textTitle}>
            <h1 style={{fontWeight:"normal"}}>contact</h1>
          </div>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default contact;
