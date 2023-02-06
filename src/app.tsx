import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PhoneVerify from "./pages/PhoneVerify";
import Rules from './pages/Rules';
import styles from './app.module'

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="phone/verify" element={<PhoneVerify />} />
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
