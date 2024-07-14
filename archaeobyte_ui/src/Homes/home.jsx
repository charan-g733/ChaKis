import React from 'react';
import Header from '../components/Header/header';
import Navigationbar from '../components/Navigationbar/navigation';
import Banner from '../components/Banner/Banner';
import Alumni from '../components/Alumni/alumni';
import Slots from '../components/Slots/slots';
import Benefits from '../components/Benefits/benefits'


const home = () => {
  return (
    <div>
     
      <Navigationbar></Navigationbar>
      <Header></Header>
      <Banner></Banner>
      <Alumni></Alumni>
      <Slots></Slots>
      <Benefits></Benefits>
    </div>
  );
}

export default home