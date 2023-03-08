import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Register from "./pages/Register";
import PhoneVerify from './pages/PhoneVerify';
import Challenges from "./pages/Dashboard";
import RecoverPassword from "./pages/RecoverPassword";
import CreatePassword from "./pages/CreatePassword";
import {AuthService, } from "./services/auth.service";
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './access/ProtectedRoute';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const currentUser = AuthService.shared.checkAuthenticate();
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/recoverPassword" element={<RecoverPassword />} />
                    <Route path="/createPassword" element={<CreatePassword />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Challenges page={'challenge'}/>
                            </ProtectedRoute>
                        }
                    />
                    <Route 
                        path="/leaderboard" 
                        element={                            
                        <ProtectedRoute>
                            <Challenges page={'leaderboard'}/>
                        </ProtectedRoute>
                    } 
                    />
                    <Route path="/friends" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'friends'} />} />
                    <Route path="/chat" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'chat'} />} />
                    <Route path="/topAndFlop" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'topAndFlop'} />} />
                    <Route path="/challenge" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'challenge'} />} />
                    <Route path="/findChallenges" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'findChallenges'} />} />
                    <Route path="/stakes" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'stakes'} />} />
                    <Route path="/selectRound" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'selectRound'} />} />
                    <Route path="/createChallenge" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'createChallenge'} />} />
                    <Route path="/field" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'field'} />} />
                    <Route path="/pickPlayer" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'pickPlayer'} />} />
                    <Route path="/phoneVerify" element={<PhoneVerify />} />
                    <Route path="/forgotPassword"element={<RecoverPassword />} />
                    {/*<Route path="/contact" element={<Contact />} />*/}
                    <Route path="/about" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'about'} />} />
                    <Route path="/rules" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'rules'} />} />
                    <Route
                        path="/profile"
                        element={
                        <ProtectedRoute>
                            <Challenges page={'profile'}/>
                        </ProtectedRoute>} />
                    <Route path="/terms" element={!currentUser ? <Navigate to="/" /> : <Challenges page={'terms'} />} />
                </Routes>
            </AuthProvider>
            <ToastContainer />
        </>
    );
};

export default App;
