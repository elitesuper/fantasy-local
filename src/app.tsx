import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Register from "./pages/Register";
import PhoneVerify from './pages/PhoneVerify';
import Challenges from "./pages/Dashboard";
import RecoverPassword from "./pages/RecoverPassword";
import CreatePassword from "./pages/CreatePassword";
import {AuthService, } from "./services/auth.service";
import { AuthProvider, AuthRoute } from './contexts/AuthContext';

const App = () => {
    const currentUser = AuthService.shared.checkAuthenticate();
    return (
        <>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recoverPassword" element={<RecoverPassword />} />
                    <Route path="/createPassword" element={<CreatePassword />} />
                    <Route path="/dashboard" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'challenge'}/>} />
                    <Route path="/leaderboard" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'leaderboard'} />} />
                    <Route path="/friends" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'friends'} />} />
                    <Route path="/chat" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'chat'} />} />
                    <Route path="/topAndFlop" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'topAndFlop'} />} />
                    <Route path="/challenge" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'challenge'} />} />
                    <Route path="/findChallenges" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'findChallenges'} />} />
                    <Route path="/createChallenge" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'createChallenge'} />} />
                    <Route path="/pickPlayers" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'pickPlayers'} />} />
                    <Route path="/phoneVerify" element={<PhoneVerify />} />
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    <Route path="/about" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'about'} />} />
                    <Route path="/rules" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'rules'} />} />
                    <Route path="/profile" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'profile'} />} />
                    <Route path="/terms" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'terms'} />} />
                </Routes>
        </>
    );
};

export default App;
