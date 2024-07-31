import React from 'react';
import Header from '../components/Header/header';
import Navigationbar from '../components/Navigationbar/navigation';
import Banner from '../components/Banner/Banner';
import Alumni from '../components/Alumni/alumni';
import Slots from '../components/Slots/slots';
import Benefits from '../components/Benefits/benefits'
import Numbers from '../components/Numbers/number';
import Survey from '../components/Survey/survey';
import CustomersReviews from '../components/Customersreviews/customersreviews';
// import ItServices from '../components/IT Services Main/itservices';
import Footer from '../components/Footer/footer';
import AnimatedComponent from '../components/AnimatedComponent/AnimatedComponent';
import FAQs from '../components/FAQS/faq';
import { FaQ } from 'react-icons/fa6';


const home = () => {
  return (
    <div>
    
        <Navigationbar></Navigationbar>
      
     
        <Header></Header>
      
     <AnimatedComponent>
      <div>
        <Banner></Banner>
      </div>
     </AnimatedComponent>
     <AnimatedComponent>
      <div>
        <Alumni></Alumni>
      </div>
     </AnimatedComponent>
     <AnimatedComponent>
      <div>
        <Slots></Slots>
      </div>
     </AnimatedComponent>
     <AnimatedComponent>
      <div>
        <Benefits></Benefits>
      </div>
     </AnimatedComponent>
     <AnimatedComponent>
      <div>
        <CustomersReviews></CustomersReviews>
      </div>
      </AnimatedComponent>
      <AnimatedComponent>
      <div>
        <Numbers></Numbers>
      </div>
     </AnimatedComponent>
     <AnimatedComponent>
      <div>
        <Survey></Survey>
      </div>
     </AnimatedComponent>

     
     <AnimatedComponent>
      <div>
        <Footer></Footer>
      </div>
     </AnimatedComponent> 
     
    
    </div>
  );
}

export default home