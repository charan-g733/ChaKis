import OnlineEducation from "../components/AEA-Banner/aea-banner"
import AEACards from "../components/AEA-Domains/aea-domains"
import AeaProgress from "../components/AEA-ProgressBar/aea-progress"
import Navigationbar from "../components/Navigationbar/navigation"
import Footer from "../components/Footer/footer"
import Header from "../components/Header/header"
const AEA =()=>{
    return (
      <div>
        <Navigationbar></Navigationbar>
        <Header></Header>
        <OnlineEducation></OnlineEducation>
        <AeaProgress></AeaProgress>
            <AEACards></AEACards>
            <Footer></Footer>
      </div>
    );

}

export default AEA