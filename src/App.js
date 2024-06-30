import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Profile from './components/Profile';
import Education from './components/Education';
import Project from './components/Project';
import Connect from './components/Connect';
import KnowMore from './components/KnowMore';
import Footer from './components/Footer';
import './assets/css/meyawo.css';
import SocialShareMenu from './components/SocialShareMenu';

const App = () => (
    <div>
        <Navbar />
        <Header />
        <About />
        <Profile />
        <Education />
        <Project />
        <KnowMore />
        <Connect />
        <SocialShareMenu />
        <Footer />
    </div>
);

export default App;
