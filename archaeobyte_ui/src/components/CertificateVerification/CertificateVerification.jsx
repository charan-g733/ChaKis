import React, { useState } from "react";
import "./CertificateVerification.css";
import Navigationbar from "../../components/Navigationbar/navigation";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import cert1 from "../../Certificates/Dr. Saravanakumar Kasimedu.pdf";
import cert2 from "../../Certificates/Dr. Kadirvel A.pdf"; // Import certificate file
import cert3 from "../../Certificates/Dr. Mohamed Abbas S.pdf"; // Import certificate file
import cert4 from "../../Certificates/Dr. Chithra G. K..pdf";
import cert5 from "../../Certificates/Dr. A. Shalini.pdf";
import cert6 from "../../Certificates/Dr. Anil Kumar Bodukuri.pdf";
import cert7 from "../../Certificates/Dr. K. A. Sundararaman.pdf";
import cert8 from "../../Certificates/Dr. Boggarapu Nageswara Rao.pdf";
import cert9 from "../../Certificates/Mr. Harish Reddy Gantla.pdf";
import cert10 from "../../Certificates/Dr. Sreenath Itikela.pdf";
import cert11 from "../../Certificates/Mrs. Marlapudi Shara Lydia.pdf";
import cert12 from "../../Certificates/Dr. Mohammed Abdul Azeem.pdf";
import cert13 from "../../Certificates/Dr. Ajay Kumar Dharmireddy .pdf";
import cert14 from "../../Certificates/Dr. K. Sita Ramana.pdf";
import cert15 from "../../Certificates/Dr. Kishorebabu Dasari.pdf";
import cert16 from "../../Certificates/Ms. Shugufta Fatima.pdf";
import cert17 from "../../Certificates/Dr. Srinivas Talasila.pdf";
import cert18 from "../../Certificates/Dr. V. Manjula.pdf";
import cert19 from "../../Certificates/Dr. T. Vamshi Prasad.pdf";
import cert20 from "../../Certificates/Dr. Muduganti Pavan Kumar Reddy.pdf";
import cert21 from "../../Certificates/Dr. Siva Kumar Nannapaneni.pdf";
import cert22 from "../../Certificates/Dr. Akkiraju Pavan Chand.pdf";
import cert23 from "../../Certificates/Dr. Arunkumar Madupu.pdf";
import cert24 from "../../Certificates/Dr. K. Mallikarjuna Lingam.pdf";
import cert25 from "../../Certificates/Dr. Latha Gadepaka.pdf";
import cert26 from "../../Certificates/Dr. V. Ganesh Kumar.pdf";
import cert27 from "../../Certificates/Mrs. Anitha Patibandla.pdf";
import cert28 from "../../Certificates/Mr. Venkat Ramana Kuruhuri.pdf";
import cert29 from "../../Certificates/Dr. G. Naveen Kumar.pdf";
import cert30 from "../../Certificates/Dr. P.H.V. Sesha Talpa Sai.pdf";


const CertificateVerification = () => {
  const [id, setId] = useState("");
  const [record, setRecord] = useState(null);
  const [error, setError] = useState("");

  const certificates = [
    {
      id: "DE0920251911",
      name: "Dr. Saravanakumar Kasimedu",
      category: "Best Researcher Award",
      certificateUrl: cert1, // Use the imported certificate file
    },
    {
      id: "DE0920251101",
      name: "Dr. Kadirvel A",
      category: "Best Researcher Award",
      certificateUrl: cert2, // Use the imported certificate file
    },
    {
        id: "DE0920251319",
        name:"Dr. Mohamed Abbas S",
        category: "Best Researcher Award",
        certificateUrl: cert3, // Use the imported certificate file
      },
      {
        id: "DE0720250307",
        name: "Dr. Chithra G. K.",
        category: "Outstanding Woman Educator of the Year 2024",
        certificateUrl: cert4, // Use the imported certificate file
      },
      {
        id: "DE0920250119",
        name: "Dr. A. Shalini",
        category: "Best Researcher Award",
        certificateUrl: cert5, // Use the imported certificate file
      },
      {
        id: "DE0120250111",
        name: "Dr. Anil Kumar Bodukuri",
        category: "Excellence in Innovative Teaching Methods",
        certificateUrl: cert6, // Use the imported certificate file
      },
      {
        id: "DE0920251119",
        name: "Dr. K. A. Sundararaman",
        category: "Best Researcher Award",
        certificateUrl: cert7, // Use the imported certificate file
      },
      {
        id: "DE0920250214",
        name: "Dr. Boggarapu Nageswara Rao",
        category: "Best Researcher Award",
        certificateUrl: cert8, // Use the imported certificate file
      },
      {
        id: "DE0920250818",
        name: "Mr. Harish Reddy Gantla",
        category: "Best Researcher Award",
        certificateUrl: cert9, // Use the imported certificate file
      },
      {
        id: "DE0320251909",
        name: "Dr. Sreenath Itikela",
        category: "Best Teacher of the Year 2024",
        certificateUrl: cert10, // Use the imported certificate file
      },
      {
        id: "DE0720251319",
        name: "Mrs. Marlapudi Shara Lydia",
        category: "Outstanding Woman Educator of the Year 2024",
        certificateUrl: cert11, // Use the imported certificate file
      },
      {
        id: "DE0920251301",
        name: "Dr. Mohammed Abdul Azeem",
        category: "Best Researcher Award",
        certificateUrl: cert12, // Use the imported certificate file
      },
      {
        id: "DE1020250111",
        name: "Dr. Ajay Kumar Dharmireddy",
        category: "Emerging Researcher Award",
        certificateUrl: cert13, // Use the imported certificate file
      },
      {
        id: "DE0320251119",
        name: "Dr. K. Sita Ramana",
        category: "Best Teacher of the Year 2024",
        certificateUrl: cert14, // Use the imported certificate file
      },
      {
        id: "DE1020251104",
        name: "Dr. Kishorebabu Dasari",
        category: "Emerging Researcher Award",
        certificateUrl: cert15, // Use the imported certificate file
      },
      {
        id: "DE1020251906",
        name: "Ms. Shugufta Fatima",
        category: "Emerging Researcher Award",
        certificateUrl: cert16, // Use the imported certificate file
      },
      {
        id: "DE1020251920",
        name: "Dr. Srinivas Talasila",
        category: "Emerging Researcher Award",
        certificateUrl: cert17, // Use the imported certificate file
      },
      {
        id: "DE0920252213",
        name: "Dr. V. Manjula",
        category: "Best Researcher Award",
        certificateUrl: cert18, // Use the imported certificate file
      },
      {
        id: "DE0920252022",
        name: "Dr. T. Vamshi Prasad",
        category: "Best Researcher Award",
        certificateUrl: cert19, // Use the imported certificate file
      },
      {
        id: "DE0320251316",
        name: "Dr. Muduganti Pavan Kumar Reddy",
        category: "Best Teacher of the Year 2024",
        certificateUrl: cert20, // Use the imported certificate file
      },
      {
        id: "DE0720251911",
        name: "Dr. Siva Kumar Nannapaneni",
        category: "Outstanding Mentor Award for Student Success",
        certificateUrl: cert21, // Use the imported certificate file
      },
      {
        id: "DE0920250116",
        name: "Dr. Akkiraju Pavan Chand",
        category: "Best Researcher Award",
        certificateUrl: cert22, // Use the imported certificate file
      },
      {
        id: "DE1020250113",
        name: "Dr. Arunkumar Madupu",
        category: "Emerging Researcher Award",
        certificateUrl: cert23, // Use the imported certificate file
      },
      {
        id: "DE0520251113",
        name: "Dr. K. Mallikarjuna Lingam",
        category: "Emerging Educator of the Year 2024",
        certificateUrl: cert24, // Use the imported certificate file
      },
      {
        id: "DE0720251207",
        name: "Dr. Latha Gadepaka",
        category: "Outstanding Woman Educator of the Year 2024",
        certificateUrl: cert25, // Use the imported certificate file
      },
      {
        id: "DE0320252207",
        name: "Dr. V. Ganesh Kumar",
        category: "Best Teacher of the Year 2024",
        certificateUrl: cert26, // Use the imported certificate file
      },
      {
        id: "DE0720250116",
        name: "Mrs. Anitha Patibandla",
        category: "Outstanding Woman Educator of the Year 2024",
        certificateUrl: cert27, // Use the imported certificate file
      },
      {
        id: "DE1120252218",
        name: "Mr. Venkat Ramana Kuruhuri",
        category: "Honorary Fellowship for Visionary Educational Leadership",
        certificateUrl: cert28, // Use the imported certificate file
      },
      {
        id: "DE1120251411",
        name: "Dr. G. Naveen Kumar",
        category: "Distinguished Fellowship in Academic Excellence and Leadership",
        certificateUrl: cert29, // Use the imported certificate file
      },
      {
        id: "DE1120251920",
        name: "Dr. P.H.V. Sesha Talpa Sai",
        category: "Honorary Fellowship for Pioneering Contributions to Transformative Education",
        certificateUrl: cert30, // Use the imported certificate file
      },
    // Add more certificates as needed
  ];

  const handleVerify = () => {
    const foundRecord = certificates.find((cert) => cert.id === id);
    if (foundRecord) {
      setRecord(foundRecord);
      setError("");
    } else {
      setRecord(null);
      setError("No such record found");
    }
  };

  const handleDownload = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.pdf`; // Set the filename to the name of the certificate with '.pdf' extension
    link.click();
  };

  return (
    <>
      <Navigationbar />
      <Header />
      <div className="certificate-verification-container">
        <div className="verification-box">
          <div className="box-left">
            <h2>International Teaching Excellence Awards 2025</h2>
            <p>
            The International Teaching Excellence Awards 2025, held on January 24th, celebrated educators who have made remarkable contributions to teaching. The event recognized their dedication to inspiring students and advancing education.            </p>
            
            <p className="verify-text">Verify your certificate here:</p>
            <input
              type="text"
              placeholder="Enter 12 Digit Certificate ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            {error && <p className="error-message">{error}</p>}
            {record && (
            <div className="certificate-details">
                <p><span>Name:</span> {record.name}</p>
                <p><span>Award Category:</span> {record.category}</p>
                <button onClick={() => handleDownload(record.certificateUrl, record.name)}>
                Download Certificate
                </button>
            </div>
            )}

          </div>
          <div className="box-right">
            {/* Placeholder for Award Image */}
            <img
              src={`${process.env.PUBLIC_URL}/images/Awards_Img_2.jpeg`}
              alt="Award Placeholder"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CertificateVerification;
