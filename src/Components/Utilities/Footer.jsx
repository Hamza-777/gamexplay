import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer flex-center flex-col'>
      <section className='contact flex-center'>
        <a href='!#' className='icon'>
          <FiGithub />
        </a>
        <a href='!#' className='icon'>
          <FiLinkedin />
        </a>
        <a href='!#' className='icon'>
          <FiTwitter />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
