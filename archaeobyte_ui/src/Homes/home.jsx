import React from 'react';
import Header from '../components/Header/header';
import Navigationbar from '../components/Navigationbar/navigation';
import Banner from '../components/Banner/Banner';
import Alumni from '../components/Alumni/alumni';
import Slots from '../components/Slots/slots';
import Benefits from '../components/Benefits/benefits'
import CustomersReviews from '../components/Customersreviews/customersreviews';

const home = () => {
  return (
    <div>
     
      <Navigationbar></Navigationbar>
      <Header></Header>
      <Banner></Banner>
      <Alumni></Alumni>
      <Slots></Slots>
      <Benefits></Benefits>
      <CustomersReviews></CustomersReviews>
    </div>
  );
}

export default home