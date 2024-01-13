import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './common/components/About';
import { Home } from './common/components/Home';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};
