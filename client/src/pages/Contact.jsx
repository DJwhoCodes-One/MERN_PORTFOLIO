import React from 'react'
import { useState } from "react";
import contactImg from '../assets/support.png'
import './Contact.css'

const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        description: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(JSON.stringify(contact));
    };

    return (
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>
                {/* contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src={contactImg} alt="we are always ready to help" />
                    </div>

                    {/* contact form content actual  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    autoComplete="off"
                                    value={contact.username}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email">email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="off"
                                    value={contact.email}
                                    onChange={handleInput}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="description">message</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    autoComplete="off"
                                    value={contact.description}
                                    onChange={handleInput}
                                    required
                                    cols="30"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>

                <section className="mb-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7159.678731784223!2d78.18467955455955!3d26.201903221896913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c40f6387ec0b%3A0x7d593ac6b7624d87!2sJiwaji%20University%2C%20Mahalgaon%2C%20Gwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1718609083150!5m2!1sen!2sin" width="100%"
                        height="450"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>
        </>
    )
}

export default Contact
