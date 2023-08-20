import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the use of Routes

import { About, Contact, Home, Projects } from './pages';
import { NotFound, Footer, Header } from './components';

function App() {
  return (
    <Router>
      <Header />

      <Routes> {/* Use the Routes container */}
        <Route path="/" element={<Home />} /> {/* Note the 'element' prop */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
