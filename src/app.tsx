import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from "./pages/Register";
import PhoneVerify from "./pages/PhoneVerify";
import Rules from './pages/Rules';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Home />} />
                <Route path="/phoneVerify" element={<PhoneVerify />} />
                {/*<Route path="/contact" element={<Contact />} />*/}
                <Route path="/about" element={<About />} />
                <Route path="/rules" element={<Rules />} />
                {/*<Route path="/profile" element={<Profile />} />*/}
                {/*<Route path="/terms" element={<Terms />} />*/}
                {/*<Route path="*" element={<NoMatch />} />*/}
            </Routes>
        </>
    );
};

export default hot(App);
