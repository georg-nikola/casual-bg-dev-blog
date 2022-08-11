import { Routes, Route } from 'react-router-dom';

import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <main id="main-content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/register' element={<Home />} />
        <Route path='/logout' element={<Home />} />
        <Route path='/create' element={<Home />} />
        <Route path='/blogs/:blogId/edit' element={<Home />} />
        <Route path='/catalog' element={<Home />} />
        <Route path='/catalog/:gameId' element={<Home />} />

      </Routes>
      <Catalog/>
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;
