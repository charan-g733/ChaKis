import {
  Route,
  Routes,
} from 'react-router-dom';

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../src/Homes/home';
import Bussiness from './components/Bussiness/bussiness';
import Teams from './components/Teams/teams';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/bussiness" element={<Bussiness />} />
        <Route path="/team" element={<Teams />} />
        </Routes>
      </div>
      
  );
}

export default App;
