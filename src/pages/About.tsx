import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const About = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="container">
                <button className="btn" onClick={() => navigate(-1)}>
                    Go Back
                </button>
                <div className="title">
                    <h1>About</h1>
                </div>
                <div className="about-container">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                        eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
                        aliquid ratione facere enim eveniet modi necessitatibus quas
                        asperiores pariatur, amet velit?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
                        eos tenetur beatae nihil dolorum possimus voluptate esse voluptatibus,
                        aliquid ratione facere enim eveniet modi necessitatibus quas
                        asperiores pariatur, amet velit?
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default About;
