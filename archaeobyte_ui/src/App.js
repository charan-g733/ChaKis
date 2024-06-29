
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headerbar from './components/Header/header';
import Navigationbar from './components/Navigationbar/navigation';
import Banner from './components/Banner/Banner';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function App() {
  return (
    <div>
      <Headerbar></Headerbar>
      <Navigationbar></Navigationbar>
      <Banner></Banner>

    </div>
  );
}

export default App;
