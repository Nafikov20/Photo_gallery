import React, { useEffect } from 'react';
import { Header } from './components/header/header';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from './pages/home';
import { Map } from './pages/location-photo/map';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Map />} path='/map' />
      </Routes>
    </>
  );
};

export default App;
