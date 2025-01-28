'use client';

import React, { useEffect } from 'react';
import './hero.css';
import HeroBtn from '../components/HeroBtn';
import GLightbox from 'glightbox'; // Assurez-vous que l'importation est correcte
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importez les styles AOS

export default function Hero() {
    useEffect(() => {
        // Initialiser AOS
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Initialiser GLightbox avec `new`
        const lightbox = new GLightbox({
            selector: '.glightbox',
        });

        // Nettoyer à la destruction du composant
        return () => {
             // @ts-ignore
        lightbox.destroy();
        };
    }, []);

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start"
                 data-aos="zoom-in"
                 data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>Welcome to Tchop <span>Resto</span></h1>
                        <h2>Delicious Food, Delivered to Your Doorstep</h2>

                        <div className="btns">
                            <HeroBtn name="our menu" target="menu" />
                            <HeroBtn name="book a table" target="book-a-table" />
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center"
                         data-aos="zoom-in"
                         data-aos-delay="200">
                        <a href="https://www.youtube.com/watch?v=xPPLbEFbCAo"
                           className="glightbox play-btn">
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}