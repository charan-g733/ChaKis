import InnovateBanner from "../components/innovate-banner/innovate-banner"
import InnovateCards from "../components/Innovate-Cards/in_domains"
import ProgressSteps from "../components/ProgressSteps/progress"
import Navigationbar from "../components/Navigationbar/navigation";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const Innovate=()=>{
    return (
      <div>
      
        <Navigationbar></Navigationbar>
        <Header></Header>
        <InnovateBanner></InnovateBanner>
        <ProgressSteps></ProgressSteps>
            <InnovateCards></InnovateCards>
            <Footer></Footer>
      </div>
    );
}

export default Innovate