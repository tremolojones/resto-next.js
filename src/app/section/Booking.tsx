'use client';

import React, { useState } from 'react';
import './booking.css';
import SectionTitle from '../components/SectionTitle';

export default function Booking() {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
        validate: '',
    };

    const [text, setText] = useState(initialState);

    // Gestion du changement dans les champs du formulaire
    const handleTextChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    // Soumission du formulaire
    const handleSubmitBooking = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validation des champs requis
        if (
            text.name.trim() === '' ||
            text.email.trim() === '' ||
            text.phone.trim() === '' ||
            text.date.trim() === '' ||
            text.time.trim() === '' ||
            text.people.trim() === ''
        ) {
            setText((prevState) => ({
                ...prevState,
                validate: 'Please fill in all required fields',
            }));
            return;
        }

        // Validation spécifique pour email, téléphone, et nombre de personnes
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text.email)) {
            setText((prevState) => ({
                ...prevState,
                validate: 'Invalid email format',
            }));
            return;
        }

        const phoneRegex = /^\d+$/;
        if (!phoneRegex.test(text.phone)) {
            setText((prevState) => ({
                ...prevState,
                validate: 'Phone number should contain only numbers',
            }));
            return;
        }

        if (parseInt(text.people, 10) <= 0) {
            setText((prevState) => ({
                ...prevState,
                validate: 'Number of people must be greater than 0',
            }));
            return;
        }

        try {
            // Indiquer que la soumission est en cours
            setText((prevState) => ({ ...prevState, validate: 'loading' }));

            // Envoi des données au backend
            const response = await fetch('http://localhost:3000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            if (response.ok) {
                // En cas de succès
                const result = await response.json();
                setText((prevState) => ({
                    ...initialState,
                    validate: 'success',
                }));
                console.log('Success:', result);
            } else {
                // En cas d'erreur côté serveur
                const error = await response.json();
                setText((prevState) => ({
                    ...prevState,
                    validate: error.message || 'An error occurred. Please try again.',
                }));
                console.error('Server Error:', error);
            }
        } catch (error) {
            // En cas d'erreur réseau ou autre
            console.error('Network Error:', error);
            setText((prevState) => ({
                ...prevState,
                validate: 'An error occurred. Please try again.',
            }));
        }
    };

    return (
        <section id='book-a-table' className='book-a-table'>
            <div className='container' data-aos="fade-up">
                <SectionTitle title='Reservation' subtitle='Book A Table' />
                <form 
                    onSubmit={handleSubmitBooking}
                    className='booking-form'
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 form-group'>
                            <input
                                type='text'
                                name='name'
                                value={text.name}
                                className='form-control'
                                placeholder='Your Name'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                            <input
                                type='email'
                                className='form-control'
                                name='email'
                                value={text.email}
                                placeholder='Your Email'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                            <input
                                type='text'
                                className='form-control'
                                name='phone'
                                value={text.phone}
                                placeholder='Your Phone'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                            <input
                                type='date'
                                name='date'
                                className='form-control'
                                value={text.date}
                                placeholder='Date'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                            <input
                                type='time'
                                className='form-control'
                                name='time'
                                value={text.time}
                                placeholder='Time'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-4 col-md-6 form-group mt-3 mt-md-0'>
                            <input
                                type='number'
                                className='form-control'
                                name='people'
                                value={text.people}
                                placeholder='Number of People'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-12 form-group mt-3'>
                            <textarea
                                className='form-control'
                                name='message'
                                value={text.message}
                                placeholder='Message'
                                onChange={handleTextChange}
                            />
                        </div>
                        <div className='col-lg-12 form-group mt-3'>
                            <button type='submit' className='btn btn-primary'>
                                Book Now
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}