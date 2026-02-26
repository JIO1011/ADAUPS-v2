/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Benefits from './pages/Benefits';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename="/ADAUPS-v2/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nosotros" element={<About />} />
          <Route path="servicios" element={<Services />} />
          <Route path="beneficios" element={<Benefits />} />
          <Route path="transparencia" element={<Transparency />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

