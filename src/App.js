import {BrowserRouter, Routes, Route} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
// pages
import Index from './4_page/webpage/Index.js'
import Product from './4_page/webpage/product'
import Persona from './4_page/webpage/personal.js';
import Contact from './4_page/webpage/contact.js';
// additionals


function App() {
return (
  <AnimatePresence exitBeforeEnter>
    <BrowserRouter>
    
        <Routes>

          <Route exact path="/"   element={<Index />} />

          <Route path="/product"      element={<Product />} />

          <Route path="/personal"     element={<Persona />} />

          <Route path="/contact"      element={<Contact />} />
        </Routes>

    </BrowserRouter>
  </AnimatePresence>
);}

export default App;
