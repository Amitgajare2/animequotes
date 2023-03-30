import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Category from './components/Category';
import Footer from './components/Footer';
import Description from './pages/Description';
import Request from './pages/Request';
import Anime from './pages/Anime';
import Create from './pages/Create';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Category />} />
        <Route path="/description" element={<Description />} />
        <Route path="/request" element={<Request />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;