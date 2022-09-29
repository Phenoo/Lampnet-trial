import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Main from './pages/Main';
import scrollreveal from 'scrollreveal'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: true
    });
    sr.reveal(
      `
      .item
      `,
      {
        opacity: 0,
        interval: 300
      }
    )
  })

  useEffect(() => {
    const srl = scrollreveal({
      origin: "left",
      distance: "50px",
      duration: 1500,
      reset: true
    });
    srl.reveal(
      `
      .home,
      .question,
      .engine,
      .footer-container
      `,
      {
        opacity: 0,
        interval: 300
      }
    )
    })
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
