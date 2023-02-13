import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from "./pages/Register";
import PhoneVerify from './pages/PhoneVerify';
import Challenges from "./pages/Dashboard";
import RecoverPassword from "./pages/RecoverPassword";
import CreatePassword from "./pages/CreatePassword";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recoverPassword" element={<RecoverPassword />} />
                <Route path="/createPassword" element={<CreatePassword />} />
                <Route path="/dashboard" element={<Challenges page={'challenge'} />} />
                <Route path="/leaderboard" element={<Challenges page={'leaderboard'} />} />
                <Route path="/friends" element={<Challenges page={'friends'} />} />
                <Route path="/chat" element={<Challenges page={'chat'} />} />
                <Route path="/topAndFlop" element={<Challenges page={'topAndFlop'} />} />
                <Route path="/challenge" element={<Challenges page={'challenge'} />} />
                <Route path="/findChallenges" element={<Challenges page={'findChallenges'} />} />
                <Route path="/createChallenge" element={<Challenges page={'createChallenge'} />} />
                <Route path="/pickPlayers" element={<Challenges page={'pickPlayers'} />} />
                <Route path="/phoneVerify" element={<PhoneVerify />} />
                {/*<Route path="/contact" element={<Contact />} />*/}
                <Route path="/about" element={<Challenges page={'about'} />} />
                <Route path="/rules" element={<Challenges page={'rules'} />} />
                <Route path="/profile" element={<Challenges page={'profile'} />} />
                <Route path="/terms" element={<Challenges page={'terms'} />} />
            </Routes>
        </>
    );
};

export default App;
