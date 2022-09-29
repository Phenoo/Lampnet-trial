import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Main from './pages/Main';

function App() {
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
