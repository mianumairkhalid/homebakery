import React from 'react'; 
import Home from './pages/home';
import OurStory from './pages/our-story';
import SnackBox from './pages/snackbox';
import ContactUs from './pages/contact-us';
import BakeryArticle from './pages/bakery-article';
import Header from './components/header';
import Footer from './components/footer';
import "./App.scss"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/snackbox" element={<SnackBox />} />
        <Route path="/bakery-article" element={<BakeryArticle />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
