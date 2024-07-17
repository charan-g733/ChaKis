import React from 'react';
import Header from '../components/Header/header';
import Navigationbar from '../components/Navigationbar/navigation';
import Banner from '../components/Banner/Banner';
import Alumni from '../components/Alumni/alumni';
import Slots from '../components/Slots/slots';
import Benefits from '../components/Benefits/benefits'
import Numbers from '../components/Numbers/number';
import Survey from '../components/Survey/survey';
import ItServices from '../components/IT Services Main/itservices';


const home = () => {
  return (
    <div>
     
      <Navigationbar></Navigationbar>
      <Header></Header>
      <Banner></Banner>
      <Alumni></Alumni>
      <Slots></Slots>
      <Benefits></Benefits>
      <Numbers></Numbers>
      <Survey></Survey>
      
    </div>
  );
}

export default home