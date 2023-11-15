import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Example1 from './components/props-learning/Example1';
import Example2 from './components/props-learning/Example2';
import Example3 from './components/spread-operator/Example3';

import Example5 from './components/component/Example5';

function App() {
  return (
    <>
    <Example5 />
    {/*<Example1 />
    <Example4 />
    <Example2 />
     <Example3 />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      </BrowserRouter>*/}
    </>
  )
}

export default App
