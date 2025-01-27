'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import './hero.css';
import HeroBtn from '../components/HeroBtn';
import Glightbox from 'glightbox';

// Chargement dynamique de GLightbox uniquement côté client
export default function Hero() {
      useEffect(() => {
          new Glightbox({
            selector: '.glightbox',
          });
        
      }, []);
      return (
        <section id="hero" className="d-flex align-items-center">

          <div className="container position-relative text-center text-lg-start"
           data-aos="zoom-in" 
           data-aos-delay="100"
           >
            <div className="row">
              <div className="col-lg-8">
                <h1>Welcome to Tchop <span>Resto</span></h1>
                <h2>Delicious Food, Delivered to Your Doorstep</h2>

                <div className="btns">
                  <HeroBtn name="our menu" target="menu" />
                  <HeroBtn name="book a table" target="book-a-table" />
                </div>
              </div>
              <div
              className="col-lg-4 d-flex align-items-center justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="200"
              >
                <a href="https://www.youtube.com/watch?v=xPPLbEFbCAo" 
                className="glightbox play-btn">
                </a>
              </div>
              {/* GLightbox Wrapper */}
            </div>
          </div>
          {/* GLightbox Wrapper */}


        </section>
      );
}

