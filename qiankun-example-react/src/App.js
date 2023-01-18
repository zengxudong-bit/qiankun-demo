import React, { Suspense } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';

const RouteExample = () => {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/react' : '/'}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Router>
  )
};

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <RouteExample />
    </div>
  );
}

export default App;
