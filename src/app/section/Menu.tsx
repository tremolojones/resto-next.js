'use client';

import React, { useState, useEffect } from 'react';
import { filters } from '../data/data';
import './menu.css';
import SectionTitle from '../components/SectionTitle';
import MenuItem from '../components/MenuItem';
import Preloader from '../components/Preloader';

export default function Menu() {
    const [data, setData] = useState([]);
    const [items, setItems] = useState<{ id: number; name: string; preview: string; price: number; ingredients: string; }[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getMenuData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/menu');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data);
                setItems(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("An unexpected error occurred");
                }
            } finally {
                setIsLoading(false);
            }
        };

        getMenuData();
    }, []);

    const handleFilterChange = (category: string) => {
        if (category === "all") {
            setItems(data);
        } else {
            const filteredItems = data.filter((item: { id: number; category: string; }) => item.category === category);
            setItems(filteredItems);
        }
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
                                onClick={() => handleFilterChange(filter.category)}
                            >
                                {filter.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row menu_container" data-aos="fade-up" data-aos-delay="200">
                {isLoading ? (
                    <Preloader />
                ) : error ? (
                    <div>Error: {error}</div>
                ) : items.length > 0 ? (
                    items.map((item) => <MenuItem key={item.id} item={item} />)
                ) : (
                    <div>No items found.</div>
                )}
            </div>
        </section>
    );
}