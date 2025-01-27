'use client';

import React, { useState, useEffect } from 'react';
import './backToTopBtn.css';

export default function BackToTopBtn() {
    // Utilisation de useState pour stocker la position de scroll
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        // Fonction pour mettre à jour la position de scroll
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        // Ajout de l'écouteur d'événement pour le scroll
        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événement lors du démontage du composant
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Le tableau vide signifie que cet effet ne dépend d'aucune valeur du state ou des props, donc il ne s'exécute qu'une fois au montage

    // Fonction pour retourner en haut de la page
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Pour un scroll fluide
        });
    };

    return (
        <a 
            onClick={backToTop}
            className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}
        >
            <i className='bi bi-arrow-up-short'></i>
        </a>
    );
}