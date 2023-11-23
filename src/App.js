import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './component/Home/Home';
import MovieDetail from './component/MovieDetail/MovieDetail'
import PageNotFound from './component/PageNotFound/PageNotFound'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <div className='container'>
      <Routes>
        <Route path= '/' element={<Home />} />
        <Route path= '/movie/:imdbID' element={<MovieDetail />} />
        <Route path= '/movie/:imdbID' element={<MovieDetail />} />
        <Route path= '*' element={<PageNotFound />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
