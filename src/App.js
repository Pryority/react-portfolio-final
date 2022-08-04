import * as React from 'react';
import Nav from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume.js';
// import ib from './italy_withEndingMosh_final.mp4';

function App() {
  return (<>
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
    {/* <div className='p-2'>
      <video width="100%" height="100%" className='rounded-t-lg' controls autoPlay={true} muted={true}>
        <source src={ib} type="video/mp4" />
      </video>
    </div> */}
    <Footer /></>
  );
}

export default App;
