import React from "react";
import "./bussiness.css";
import Navigationbar from "../Navigationbar/navigation";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Survey from "../Survey/survey";
import {
  FaDesktop,
  FaMobileAlt,
  FaCogs,
  FaTools,
  FaCloud,
  FaRobot,
  FaGamepad,
  FaMicrochip,
} from "react-icons/fa";

const App = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Header></Header>

      <div className="archeobyte-container">
        <h1 className="archeobyte-title">Why DevElet?</h1>
        <p className="archeobyte-description">
          We provide IT Solutions like you never Experienced before.
        </p>

        <div className="archeobyte-tech-features-container">
          <div className="archeobyte-tech-feature-section">
            <div className="archeobyte-tech-feature-text">
              <h1>Lightning-Fast Performance</h1>
              <p>
                Experience unparalleled speed with our optimized web solutions.
                We ensure your website loads in a flash, providing users with a
                seamless and engaging experience, reducing bounce rates, and
                increasing conversions.
              </p>
            </div>
            <div className="archeobyte-tech-feature-image">
              <img
                src="images/lightning.webp"
                alt="Lightning-Fast Performance"
              />
            </div>
          </div>
          <div className="archeobyte-tech-feature-section">
            <div className="archeobyte-tech-feature-image">
              <img src="images/target.webp" alt="Precision and Accuracy" />
            </div>
            <div className="archeobyte-tech-feature-text">
              <h1>Precision and Accuracy</h1>
              <p>
                Our meticulous attention to detail guarantees precise and
                accurate coding. Every element is crafted to perfection,
                ensuring your website functions flawlessly across all devices
                and platforms.
              </p>
            </div>
          </div>
          <div className="archeobyte-tech-feature-section">
            <div className="archeobyte-tech-feature-text">
              <h1>User-Centric Design</h1>
              <p>
                We prioritize user experience in every design decision. Our
                intuitive and aesthetically pleasing interfaces ensure that
                users can easily navigate and engage with your website, boosting
                satisfaction and retention.
              </p>
            </div>
            <div className="archeobyte-tech-feature-image">
              <img src="images/ui.webp" alt="User-Centric Design" />
            </div>
          </div>
          <div className="archeobyte-tech-feature-section">
            <div className="archeobyte-tech-feature-image">
              <img src="images/security.jpeg" alt="Robust Security" />
            </div>
            <div className="archeobyte-tech-feature-text">
              <h1>Robust Security</h1>
              <p>
                Protect your digital assets with our top-notch security
                measures. We implement advanced security protocols to safeguard
                your website from threats, ensuring data integrity and user
                trust.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="archeobyte-container archeobyte-application-models">
        <h2>Application Models</h2>
        <div className="archeobyte-models-grid">
          <div className="archeobyte-model">
            <FaDesktop size={50} />
            <h3>Web Applications</h3>
            <p>Building responsive and scalable web applications.</p>
          </div>
          <div className="archeobyte-model">
            <FaMobileAlt size={50} />
            <h3>Mobile Applications</h3>
            <p>Creating seamless mobile experiences on iOS and Android.</p>
          </div>
          <div className="archeobyte-model">
            <FaCogs size={50} />
            <h3>Custom Solutions</h3>
            <p>Tailoring software to fit your unique business needs.</p>
          </div>
          <div className="archeobyte-model">
            <FaTools size={50} />
            <h3>Maintenance & Support</h3>
            <p>Providing ongoing support and updates for your software.</p>
          </div>
          <div className="archeobyte-model">
            <FaCloud size={50} />
            <h3>Cloud Solutions</h3>
            <p>Optimizing your operations with cloud technology.</p>
          </div>
          <div className="archeobyte-model">
            <FaRobot size={50} />
            <h3>Automation</h3>
            <p>Streamlining processes through intelligent automation.</p>
          </div>
          <div className="archeobyte-model">
            <FaGamepad size={50} />
            <h3>Game Development</h3>
            <p>Creating immersive gaming experiences.</p>
          </div>
          <div className="archeobyte-model">
            <FaMicrochip size={50} />
            <h3>IoT Solutions</h3>
            <p>Integrating smart devices with innovative IoT solutions.</p>
          </div>
        </div>
      </div>

      <Survey></Survey>
      <Footer></Footer>
    </>
  );
};

export default App;
