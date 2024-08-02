import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import instagram from '../assets/ig.png'
import './pages.css';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lpufq9x', 'template_vtgmgul', form.current, {
        publicKey: 'His6Spma5pvOuA-3h',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className = 'pages'>
      <h1 style={{ fontFamily: 'Garet' }}>Contact Us</h1>
      <Link to="https://www.instagram.com/lumpialadiez/"><img src={instagram} alt='instagram'/></Link>
          <form ref={form} onSubmit={sendEmail}>
      <label style={{ fontFamily: 'Garet' }}>Name</label>
      <input type="text" name="user_name" />
      <label style={{ fontFamily: 'Garet' }}>Email</label>
      <input type="email" name="user_email" />
      <label style={{ fontFamily: 'Garet' }}>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    
    </div>
 
  );
};



{/* 

 <div>
         <h1 style={{ fontFamily: 'Garet' }}>Contact Us</h1>
         <Link to="/" className="site-title">
<i className='fab fa-typo3'/> </Link>
<img src={instagram} alt="instagram" />   */
//  <div>
        {/* <h1>Contact Us</h1>
        <p>Want to talk to us? Shoot us an email and we'll get back to you ASAP.</p>
    </div>

    <Container>
            <Row className="mb-5 mt-3">
                <Col lg='8'>
                <h1 className="displau-4 mb-4">
                   Contact Me </h1>
                   </Col>
            </Row> */}}
        