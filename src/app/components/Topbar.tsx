'use client'

import React, { useState, useEffect } from 'react';
import './topBar.css';

export default function Topbar() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'événement lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            id='topbar'
            className={`d-flex align-items-center fixed-top ${
                scroll > 100 ? 'topbar-scrolled' : undefined}`}
        >
            <div className='container d-flex justify-content-between align-items-center'>
                <div className='contact-info d-flex align-items-center'>
                    <i className='bi bi-phone d-flex align-items-center'>
                        <span>+32 234 567 890</span>
                    </i>
                    <i className='bi bi-clock d-flex align-items-center m-4'>
                        <span>Monday - Friday: 10 AM - 6 PM</span>
                    </i>
                </div>
                <div className='languages d-none d-md-flex align-items-center'>
                    <ul>
                        <li>EN</li>
                        <li>
                            <a href="#">FR</a>
                            <a href="#">NL</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

