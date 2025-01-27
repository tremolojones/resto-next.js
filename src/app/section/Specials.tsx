'use client';

import React, { useState } from 'react';
import './specials.css';
import { specials, specialsFilters } from '../data/data'; // Importation des données statiques
import SectionTile from '../components/SectionTitle';
import Preloader from '../components/Preloader';
import SpecialsItem from '../components/SpecialsItem';

export default function Specials() {
    // Initialisez les états avec les données statiques
    const [items, setItems] = useState(specials);

    // Gérer les changements de filtre
    const handleSpecialChange = (id: number) => {
        const updatedItems = specials.map((item) => ({
            ...item,
            active: item.id === id, // Activer l'élément correspondant à l'ID
        }));
        setItems(updatedItems);
    };

    return (
        <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
                <SectionTile title="Specials" subtitle="Check Our Specials" />
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    {/* Navigation latérale */}
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            {specialsFilters.map(filter => (
                                <li className="nav-item" key={filter.id}>
                                    <a
                                        className={`nav-link ${filter.active ? 'active' : ''}`}
                                        onClick={() => handleSpecialChange(filter.id)}
                                    >
                                        {filter.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Contenu principal */}
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            {!items ? (
                                <Preloader />
                            ) : items.length > 0 ? (
                                items.map(
                                    (item: {
                                      id: number;
                                      image: string; // Update this line to use 'image' instead of 'images'
                                      title: string;
                                      subtitle: string;
                                      content: string;
                                      active: boolean;
                                    }) => <SpecialsItem key={item.id} item={item} />
                                  )
                            ) : (
                                <Preloader />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}