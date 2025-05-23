import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Rooms from './pages/Rooms';
import Activities from './pages/Activities';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Memories from './pages/Memories';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/memories" element={<Memories/>} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;