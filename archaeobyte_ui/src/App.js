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
import Innovate from './Innovate/innovate';
import AEA from './AEA/aea';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/business" element={<Bussiness />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/Innovate" element={<Innovate/>}/>
        <Route path="/AEA" element={<AEA/>}/>
        </Routes>
      </div>
      
  );
}

export default App;
