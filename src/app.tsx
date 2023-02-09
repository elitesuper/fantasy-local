import React from 'react'
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Register from "./pages/Register";
import PhoneVerify from './pages/PhoneVerify';
import Rules from './pages/Rules';
import Dashboard from "./pages/Dashboard";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard page={'challenge'} />} />
                <Route path="/leaderboard" element={<Dashboard page={'leaderboard'} />} />
                <Route path="/friends" element={<Dashboard page={'friends'} />} />
                <Route path="/chat" element={<Dashboard page={'chat'} />} />
                <Route path="/topAndFlop" element={<Dashboard page={'topAndFlop'} />} />
                <Route path="/findChallenges" element={<Dashboard page={'findChallenges'} />} />
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

export default App;
