import React from 'react'
import '../index.css'
import { useState } from "react";
import registerImg from '../assets/register.png'

const Register = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        });
    };

    // handle form on submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const response = await fetch(
            'http://localhost:8081/api/auth/register',
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
        console.log(response);
        if (response.ok) {
            setUser(
                {
                    username: "",
                    email: "",
                    password: "",
                }
            )
        }
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img
                                    src={registerImg}
                                    alt="Register"
                                    width="450"
                                    height="500"
                                />
                            </div>
                            {/* our main registration code  */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registration form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={user.username}
                                            onChange={handleInput}
                                            placeholder="username"
                                            id='username'
                                            required
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            placeholder="email"
                                            id='email'
                                            required
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={user.password}
                                            onChange={handleInput}
                                            placeholder="password"
                                            id='password'
                                            required
                                            autoComplete='off'
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Register Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Register
