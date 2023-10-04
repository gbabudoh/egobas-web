import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CookieConsent from 'react-cookie-consent'; // Import the CookieConsent component
import Home from './components/pages/Home';
import About from './components/pages/About';
import Process from './components/pages/Process';
import Ideation from './components/pages/Ideation';
import Markets from './components/pages/Markets';
import Insight from './components/pages/Insight';
import Contact from './components/pages/Contact';
import Subsidiaries from './components/pages/Subsidiaries';
import Body from './components/Body';
import Footer from './components/Footer';
import Services from './components/pages/Services';
import Clients from './components/pages/Clients';
import Operating from './components/pages/Operating';
import Productivity from './components/pages/Productivity';
import Leadership from './components/pages/Leadership';
import Value from './components/pages/Value';
import Platforms from './components/pages/Platforms';
import Innovation from './components/pages/Innovation';
import Culture from './components/pages/Culture';
import Compliance from './components/pages/Compliance';
import Communication from './components/pages/Communication';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/ideation" element={<Ideation />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/subsidiaries" element={<Subsidiaries />} />
        <Route path="/body" element={<Body />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/operating" element={<Operating />} />
        <Route path="/productivity" element={<Productivity />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/value" element={<Value />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/communication" element={<Communication />} />
      </Routes>

      <CookieConsent
        location="bottom"
        buttonText="Got it!"
        cookieName="yourCookieName"
        style={{ background: "#4c4444", fontSize: "16px", textAlign: "center" }}
        buttonStyle={{ color: "#fff", fontSize: "14px", backgroundColor: "rgb(76, 68, 68)", border: "1px solid #fff" }}
        expires={150}        
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default App;
