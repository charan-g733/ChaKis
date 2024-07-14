import React from 'react'
import Header from 'D:/WEB DEV/ChaKis/archaeobyte_ui/src/components/Header/header'
import Navigationbar from 'D:/WEB DEV/ChaKis/archaeobyte_ui/src/components/Navigationbar/navigation'
import Banner from 'D:/WEB DEV/ChaKis/archaeobyte_ui/src/components/Banner/Banner'
import Alumni from "D:/WEB DEV/ChaKis/archaeobyte_ui/src/components/Alumni/alumni";
import Slots from "D:/WEB DEV/ChaKis/archaeobyte_ui/src/components/Slots/slots";
const home = () => {
  return (
    <div>
     
      <Navigationbar></Navigationbar>
      <Header></Header>
      <Banner></Banner>
      <Alumni></Alumni>
      <Slots></Slots>
    </div>
  );
}

export default home