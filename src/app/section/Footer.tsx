import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='footer-top'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6'>
              <div className='footer-info'>
                <h3>Tchop Resto</h3>
                <p>
                  45 rue de la gare<br/>
                  5000 Namur
                  <br />
                  <br />
                  <strong>Phone:</strong> +32 4 54 54 54
                  <br />
                  <strong>Email:</strong> info@tchopresto.be
                  <br />
                </p>
                <div className='social-links mt-3'>
                  <a href='#' className='twitter'>
                    <i className='bi bi-twitter-x'></i>
                  </a>
                  <a href='#' className='facebook'>
                    <i className='bi bi-facebook'></i>
                  </a>
                  <a href='#' className='instagram'>
                    <i className='bi bi-instagram'></i>
                  </a>
                  <a href='#' className='linkedin'>
                    <i className='bi bi-linkedin'></i>
                  </a>
                  <a href='#' className='youtube'>
                    <i className='bi bi-youtube'></i>
                  </a>
                </div>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i>{''}
                  <a href='#home'>Home</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href='#about'>About Us</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='#menu'>Menu</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>
                  <a href='#events'>Events</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href='#gallery'>Gallery</a>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-links'>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href="#">Functions</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href="#">Parties</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href="#events">Events</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href="#chefs">Private Chef</a>
                </li>
                <li>
                  <i className='bx bx-chevron-right'></i>{' '}
                  <a href="#events">Ceremony</a>
                </li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 footer-newsletter'>
              <h4>Our Newsletter</h4>
              <p>Subscribe to our newsletter and get exclusive discounts and updates.</p>
              <form action="" method="post">
                <input type="email" name="email"    />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='copyright'>
          &copy; Copyright <strong><span>Tchop Resto</span></strong>. All Rights Reserved
        </div>
        <div className='credits'>
          Designed by <a href="#">Marius Tchumtchoua Foko</a>
        </div>
      </div>
    </footer>
  );
}
