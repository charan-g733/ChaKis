
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerbar from './components/Header/header';
import Navigationbar from './components/Navigationbar/navigation';
import Banner from './components/Banner/Banner';
import Alumni from './components/Alumni/alumni';
import Slots from './components/Slots/slots';
import Benefits from './components/Benefits/benefits';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div>
      <Navigationbar></Navigationbar>
      <Headerbar></Headerbar>
      <Banner></Banner>
      <Alumni></Alumni>
      <Slots></Slots>
      <Benefits></Benefits>

    </div>
  );
}

export default App;
