import React from 'react'
import './Hero.css'
import heroImg from '../assets/home.png'
import designImg from '../assets/design.png'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World Best IT Company</p>
                            <h1>Welcome to <span style={{ color: "pink" }}>DJwhoCODES</span></h1>
                            <p>
                                Are you ready to take your business to the next level with
                                cutting-edge IT solutions? Look no further! At Thapa Technical,
                                we specialize in providing innovative IT services and solutions
                                tailored to meet your unique needs.
                            </p>
                            <div className="btn btn-group">
                                <NavLink to="/contact">
                                    <button className="btn">connect now</button>
                                </NavLink>
                                <NavLink to="/projects">
                                    <button className="btn secondary-btn">Projects</button>
                                </NavLink>
                            </div>
                        </div>

                        {/* hero images  */}
                        <div className="hero-image">
                            <img
                                src={heroImg}
                                alt="coding together"
                                width="450"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section  */}
            {/* <Analytics /> */}

            {/* 3rd section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    {/* hero images  */}
                    <div className="hero-image">
                        <img
                            src={designImg}
                            alt="coding together"
                            width="450"
                            height="500"
                        />
                    </div>

                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure
                            IT infrastructure? Contact us today for a free consultation and
                            let's discuss how Thapa Technical can help your business thrive in
                            the digital age.
                        </p>
                        <div className="btn btn-group">
                            <NavLink to="/contact">
                                <button className="btn">connect now</button>
                            </NavLink>
                            <NavLink href="/services">
                                <button className="btn secondary-btn">learn more</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
