import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Example1 from './components/props-learning/Example1';
import Example2 from './components/props-learning/Example2';

function App() {
  return (
    <>
    <Example1 />
    <Example2 />
      {/*<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>*/}
    </>
  )
}

export default App
