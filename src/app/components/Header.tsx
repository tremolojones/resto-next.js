'use client';

import React, { useState, useEffect } from 'react';

import Nav from './Nav';
import AppBtn from './AppBtn';
import './header.css';

export default function Header() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY);
        });
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY);
            });
        };
    }, []);
     
    return (
        <header 
            id="header"
            className={`fixed-top d-flex align-items-center ${
                scroll > 100 ? 'header-scrolled' : undefined}`}
        >
            <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
                <h1 className="logo me-auto me-lg-0">
                    <a href="/">Restaurant</a>
                </h1>
                <Nav />
                <AppBtn name="Book a table" />
            </div>
        </header>
    );
}
 