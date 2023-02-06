import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import MatchRows from "../components/Match/MatchRows";
import NavBar from "../components/Navbar/Navbar";

const Home = () => {
    return (
        <>
            <Header />
            <NavBar />
            <MatchRows />
            <Footer/>
        </>
    );
};

export default Home;
