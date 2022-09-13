import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_61y4bed', 'template_3hsdagr', form.current, 'zGSrd0zR_zQtz-K6w')

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>leviet1612@gmail.com</h5>
            <a href="mailto:leviet1612@gmail.com" target="_blank">Send a message
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>leviet1612@gmail.com</h5>
            <a href="mailto:leviet1612@gmail.com" target="_blank">Send a message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Phone Call</h4>
            <h5>leviet1612@gmail.com</h5>
            <a href="mailto:leviet1612@gmail.com" target="_blank">Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="" placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary' value="Send">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact