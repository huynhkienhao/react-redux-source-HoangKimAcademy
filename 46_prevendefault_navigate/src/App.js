import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Details from './components/Details';
import News from './components/News';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:slugAndId.html' element={<Details />} />
        <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;