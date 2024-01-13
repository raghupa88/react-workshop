import React from 'react';
import { Emails } from '../common/components/Emails';
import { Admin } from '../common/components/Admin';

export const adminRoutes = [
  {
    path: '/admin',
    element: React.createElement(Admin),
  },
  {
    path: '/email',
    element: React.createElement(Emails),
  },
];
