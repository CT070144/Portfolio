import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home/Home';
import About from '~/pages/About/About';
import Portfolio from '../../pages/Portfolio/Portfolio';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;


