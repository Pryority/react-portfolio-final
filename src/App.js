import * as React from 'react';
import Nav from './navigation/Navbar.js';
import Footer from './navigation/Footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (<>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
    <div className='p-2'>
      <video width="100%" height="100%" className='rounded-t-lg' controls autoplay='true' muted='true'>
        <source src="/italy_withEndingMosh_final.mp4" type="video/mp4" />
      </video>
    </div>
    <Footer /></>
  );
}

export default App;
