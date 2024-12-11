import {
  Route,
  Routes,
} from 'react-router-dom';
import React, { useState } from 'react';
//import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Homes/home';
import Bussiness from './components/Bussiness/bussiness';
import Teams from './components/Teams/teams';
import Innovate from './Innovate/innovate';
import AEA from '../src/AEA/aea';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ComingSoon from './components/Coming Soon/cmg';
import FeedbackLinks from './components/Feedback Cards/feedback';
import Registration_AEA from './components/Registration_AEA/registration_aea'; // Import your new registration component
import Registration_innovate from './components/Registration_innovate/registration_innovate';
import Gallery from './components/Gallery/Gallery';

import Get_in_touch from './components/Get_in_touch/Get_in_touch_form';
import Hire_with_us from './components/Hire_with_us/Hire_with_us_form'; // Import your new form component
import DeveletTeam from './components/Develet_Team/Develet_team';




function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/business" element={<Bussiness />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/innovate" element={<Innovate/>}/>
        <Route path="/aea" element={<AEA/>}/>
        <Route path = "/Coming Soon" element={<ComingSoon/>}/>
        <Route path = "/Feedback Links" element={<FeedbackLinks/>}/>
        <Route path="/register" element={<Registration_AEA />} /> {/* Add this route */}
        <Route path="/register-innovate" element={<Registration_innovate />} />
        <Route path="/get_in_touch" element={<Get_in_touch />}/>
        <Route path="/hire-with-us" element={<Hire_with_us />} /> {/* Add this route */}
        <Route path="/gallery" element={<Gallery />} />

        <Route path="/OurTeam" element={<DeveletTeam/>} />
        
        </Routes>
      </div>
      
  );
}

export default App;
