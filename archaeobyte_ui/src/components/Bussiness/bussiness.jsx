import React from "react";
import "./bussiness.css";
import Navigationbar from "../Navigationbar/navigation";
import Header from "../Header/header";

const Bussiness = () => {
  return (
    <>
      <Navigationbar></Navigationbar>
      <Header></Header>
      <div className="archeobyte-container">
        <h1 className="archeobyte-title">Why Archaeobyte?</h1>
        <p className="archeobyte-description">
          .NET is a free and open-source application platform supported by
          Microsoft.
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
              <img
                src="path/to/precision-accuracy.jpg"
                alt="Precision and Accuracy"
              />
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
              <img
                src="path/to/user-centric-design.jpg"
                alt="User-Centric Design"
              />
            </div>
          </div>
          <div className="archeobyte-tech-feature-section">
            <div className="archeobyte-tech-feature-image">
              <img src="path/to/robust-security.jpg" alt="Robust Security" />
            </div>
            <div className="archeobyte-tech-feature-text">
              <h1>Robust Security</h1>
              <p>
                Protect your digital assets with our top-notch security
                measures. We implement the latest security protocols to
                safeguard your website against threats, ensuring data integrity
                and user trust.
              </p>
            </div>
          </div>
        </div>
        <div className="archeobyte-application-models">
          <h2>Application models</h2>
          <p>
            You can build many types of apps with .NET. To help you build apps
            faster, app models are built on top of the base libraries.
          </p>
          <div className="archeobyte-models-grid">
            <div className="archeobyte-model">
              <h3>Web</h3>
              <p>
                Build web apps and services for Windows, Linux, macOS, and
                Docker.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Mobile</h3>
              <p>
                Use a single codebase to build native mobile apps for iOS,
                Android, and more.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Desktop</h3>
              <p>
                Create native apps for Windows and macOS or build apps that run
                anywhere with web technologies.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Microservices</h3>
              <p>
                Create independently deployable microservices that run on Docker
                containers.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Cloud</h3>
              <p>
                Consume existing cloud services, or create and deploy your own.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Machine learning</h3>
              <p>
                Add vision algorithms, speech processing, predictive models, and
                more to your apps.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Game development</h3>
              <p>
                Develop 2D and 3D games for the most popular desktops, phones,
                and consoles.
              </p>
            </div>
            <div className="archeobyte-model">
              <h3>Internet of Things</h3>
              <p>
                Make IoT apps, with native support for the Raspberry Pi and
                other single-board computers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bussiness;
