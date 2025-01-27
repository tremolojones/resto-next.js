'use client';

import React, { useState, useEffect } from 'react';
import { filters } from '../data/data';
import './menu.css';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';

export default function Menu() {
    const [data, setData] = useState([]);
    const [items, setItems] = useState([]);

    const getMenuData = () => {
        fetch('http://localhost:3000/api/menu')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        getMenuData();
    }, []);

    useEffect(() => {
        setItems(data);
    }, [data]);

    const handleFilterChange = (id: number, category: string) => {
        // Logique pour filtrer les éléments en fonction de l'ID et de la catégorie
        const filteredItems = data.filter((item: { id: number; category: string; }) => item.id === id || item.category === category);
        setItems(filteredItems);
    };

    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
                <SectionTitle title="menu" subtitle="Check Our Tasty Menu" />
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id='menu-filters'>
                        {filters.map(filter => (
                            <li
                                key={filter.id}
                                className={filter.active ? 'filter-active' : undefined}
                                onClick={() => handleFilterChange(filter.id, filter.category)}
                            >
                                {filter.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row menu_container"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {!items? (
                    <Preloader />
                ):items.length > 0 ? (
                    items.map(
                        (item: {
                            id: number;
                            name: string;
                            preview: string;
                            price: number;
                            ingredients: string;
                        }) => <MenuItem key={item.id} item={item} />
                    )
                ) : (
                    <Preloader />
                )}
            </div>
        </section>
    );
}
