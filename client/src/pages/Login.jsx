import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from '../assets/login.png'

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(user));
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image reg-img">
                                <img
                                    src={loginImg}
                                    alt="Login"
                                    width="450"
                                    height="500"
                                />
                            </div>
                            {/* our main registration code  */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                            placeholder="email"
                                            id='email'
                                            autoComplete='off'
                                            required
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
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Login Now
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

export default Login
