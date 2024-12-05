import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Blog from './components/Blog.js';
import Footer from './components/Footer';
import Contact from './components/Contact';
import EpisodesPage from './components/EpisodesPage';
import './styles/styles.css';

const App = () => {
    const [showHeader, setShowHeader] = useState(true);

    return (
        <Router>
            <div className="App">
                <NavBar />
                {showHeader && <Header />}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/episodes" element= {<EpisodesPage setShowHeader ={setShowHeader}/>} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
