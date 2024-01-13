import React from 'react';
import { About } from '../common/components/About';
import { Home } from '../common/components/Home';

export const publicRoutes = [
  {
    path: '/',
    element: React.createElement(Home),
  },
  {
    path: '/about',
    element: React.createElement(About),
  },
];
