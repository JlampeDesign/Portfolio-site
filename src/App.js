import {BrowserRouter, Routes, Route} from "react-router-dom";
// pages
import Index from './4_page/webpage/Index.js';
import Product from './4_page/webpage/product';
import Persona from './4_page/webpage/personal.js';
import Contact from './4_page/webpage/contact.js';
// products
import Prod1 from './4_page/webpage/products/pro1.js';
import Prod2 from './4_page/webpage/products/pro2.js';
import Prod3 from './4_page/webpage/products/pro3.js';
import Prod4 from './4_page/webpage/products/pro4.js';
import Prod5 from './4_page/webpage/products/pro5.js';
import Prod6 from './4_page/webpage/products/pro6.js';
// additionals
function Path1() {window.location.href = 'https://github.com/JlampeDesign/First-portfolio';return null;}
function Path2() {window.location.href = 'https://github.com/JlampeDesign/Portfolio-site';return null;}
function Path3() {window.location.href = 'https://github.com/JlampeDesign/3D-printer';return null;}
function Path4() {window.location.href = 'https://github.com/JlampeDesign/tiny_house';return null;}
function Path5() {window.location.href = 'https://github.com/JlampeDesign/Barber-site';return null;}
function Path6() {window.location.href = 'https://github.com/JlampeDesign/Magnetic-train';return null;}

function App() {
return (
  
    <BrowserRouter>
    
        <Routes>

          <Route exact path="/"   element={<Index />} />

          <Route path="/product"      element={<Product />} />
          <Route path="/personal"     element={<Persona />} />
          <Route path="/contact"      element={<Contact />} />

          <Route path="/0101"         element={<Prod1 />} />
          <Route path="/0102"         element={<Prod2 />} />
          <Route path="/0103"         element={<Prod3 />} />
          <Route path="/0104"         element={<Prod4 />} />
          <Route path="/0105"         element={<Prod5 />} />
          <Route path="/0106"         element={<Prod6 />} />
          
            <Route path="/pro1"      element={<Path1 />} />
            <Route path="/pro2"      element={<Path2 />} />
            <Route path="/pro3"      element={<Path3 />} />
            <Route path="/pro4"      element={<Path4 />} />
            <Route path="/pro5"      element={<Path5 />} />
            <Route path="/pro6"      element={<Path6 />} />

        </Routes>

    </BrowserRouter>

);}

export default App;
