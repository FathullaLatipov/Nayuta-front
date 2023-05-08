import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage';
import Consultaion from './components/Consultation/Consultaion';
import Physical from './components/Physical/Physical';
// import Faq from './components/FAQ/Faq';
import Yuridik from './pages/yuridik';
import Company from './pages/company';
import { useUserContext } from './components/context/home-context';
import './i18next/i18next'

const App = () => {
  const { active } = useUserContext()
  useEffect(() => {
    !active ? document.body.classList.add("scroll") : document.body.classList.remove("scroll")
  }, [active])
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/consultation' element={<Consultaion />} />
        <Route path='/uslugi/physical' element={<Physical />} />
        <Route path='/uslugi/yuridik' element={<Yuridik />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
