import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { navs } from '../data/data';
import './nav.css';

export default function Nav() {
    const pathname = usePathname();
    const router = useRouter();
    const [navList, setNavList] = useState(navs);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(0);

    // Gestion du scroll
    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Ouvrir/fermer le menu mobile
    const handleToggleMenu = () => {
        setOpen(!open);
    };

    // Défilement vers une section
    const handleScrollTo = (section: string) => {
        setOpen(false); // Fermer le menu mobile
        const header = document.querySelector('#header') as HTMLElement;
        const offset = header?.offsetHeight || 0;
        const targetElement = document.querySelector('#' + section) as HTMLElement;

        if (pathname === '/') {
            setTimeout(() => {
                if (targetElement && targetElement.offsetHeight > 0) {
                    const elementPosition = targetElement.offsetTop;
                    window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth',
                    });
                }
            }, 100); // Délai pour permettre le rendu
        } else {
            router.push(`/#${section}`);
        }
    };

    // Gestion de l'état actif des liens
    const handleNavActive = () => {
        const position = scroll + 200;
        setNavList(
            navList.map(nav => {
                nav.active = false;
                const targetSection = document.querySelector('#' + nav.target) as HTMLElement;
                if (
                    targetSection &&
                    position >= targetSection.offsetTop &&
                    position <= targetSection.offsetTop + targetSection.offsetHeight
                ) {
                    nav.active = true;
                }
                return nav;
            })
        );
    };

    // Mettre à jour l'état actif des liens lors du scroll
    useEffect(() => {
        handleNavActive();
    }, [scroll]);

    // Retour à la page d'accueil
    const handleGoHome = () => {
        document.documentElement.style.scrollBehavior = 'smooth';
        window.location.href = '/';
    };

    return (
        <nav
            id="navbar"
            className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}
        >
            <ul>
                {navList.map((nav) => (
                    <li key={nav.id}>
                        <a
                            className={`nav-link scrollTo ${nav.active ? 'active' : ''}`}
                            onClick={() => handleScrollTo(nav.target)}
                        >
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ) : (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
                {open && (
                    <li>
                        <a className="nav-link scrollTo" onClick={handleGoHome}>
                            <i className="bi bi-x-circle-fill"></i>
                        </a>
                    </li>
                )}
            </ul>
            <i
                className="bi bi-list mobile-nav-toggle"
                onClick={handleToggleMenu}
                aria-label="Toggle menu"
            ></i>
        </nav>
    );
}