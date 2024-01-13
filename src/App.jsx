import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './routes/publicRoutes';
import { Layout } from './common/components/Layout';
import { adminRoutes } from './routes/adminRoutes';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [...publicRoutes, ...adminRoutes],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
    // <BrowserRouter>
    //   <Header></Header>
    //   <Router></Router>
    // </BrowserRouter>
  );
}

export default App;
