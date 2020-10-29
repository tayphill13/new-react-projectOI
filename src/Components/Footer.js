import React from 'react';
import './Footer.css';
// import app from './base';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive the latest updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='footer-input'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to={{ pathname: "https://instagram.com"}} target="_blank">Instagram</Link>
            <Link to={{ pathname: "https://facebook.com"}} target="_blank">Facebook</Link>
            <Link to={{ pathname: "https://youtube.com"}} target="_blank">Youtube</Link>
            <Link to={{ pathname: "https://twitter.com"}} target="_blank">Twitter</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to={{ pathname: "https://github.com/tayphill13" }} target="_blank">My Github</Link>
            <Link to={{ pathname: "https://www.linkedin.com/in/taylorphillipsportland/" }} target="_blank">My LinkedIn</Link>
            <Link to={{ pathname: "https://tayphill13.github.io/Profile-Page/" }} target="_blank">My Profile Page</Link>
            <Link to={{ pathname: "mailto:taylorphillips133@gmail.com"}}>taylorphillips133@gmail.com</Link>
            {/* <Link to='/'></Link> */}
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className="footer-logo">
            <Link to='/' className='social-logo'>
              Optml-Image <i className='fas fa-atom' />
            </Link>
          </div>
          <small className='website-rights'>Optml-Image © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='YouTube'
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;