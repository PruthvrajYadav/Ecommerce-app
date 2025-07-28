// import logo from './logo.svg';
// import './App.css';
// import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import Pagenotfound from './Pages/Pagenotfound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes >
    </>
  );
}

export default App;
