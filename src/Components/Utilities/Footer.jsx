import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className='footer flex-center flex-col'>
      <section className='contact flex-center'>
        <a
          href='https://github.com/Hamza-777'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <FiGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/hamza-rarani-2683b9192/'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <FiLinkedin />
        </a>
        <a
          href='https://twitter.com/Hamza7716351712'
          target='_blank'
          rel='noreferrer'
          className='icon'
        >
          <FiTwitter />
        </a>
      </section>
    </footer>
  );
};

export default Footer;
