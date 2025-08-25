import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from '~/pages/Portfolio/Portfolio';
import NinjaAI from '~/pages/NinjaAI/NinjaAI';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/ninja" element={<NinjaAI />} />
      
    </Routes>
  );
};

export default AppRoutes;


