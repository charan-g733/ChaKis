import React from 'react';
import { Carousel } from 'react-bootstrap'; // Importing Carousel component from React Bootstrap
import './Gallery.css';


const events = 

[
    
  {
    
    id: 1,
    title: 'National Teaching Excellence Awards 2024',
    description:
      'The National Teaching Excellence Awards 2024 recognized the exceptional contributions of educators to the field of teaching. Held on National Education Day and in honor of Maulana Abul Kalam Azad, the event, organized by DevElet and the Council for Skills and Competencies, celebrated innovation and dedication in education. Esteemed speakers like Dr. G. Jaya Suma (Registrar at JNTU-GV), Dr. R. Sujatha (Principal, Wadhwani Foundation), and Sri Krishna Chippalkatti (Joint Director, C-DAC Bangalore) delivered inspiring speeches, emphasizing the importance of empowering educators.',
    date: 'Nov 11, 2024',  // Add the date field for Event 1
    slides: [
      {
        images: ['images/NTEA5.jpg', 'images/NTEA8.jpg', 'images/NTEA7.jpg'],
        content: 'Dr. V.S.K Reddy (Vice Chancellor at Malla Reddy University), Dr. Pramod (Dean RnD at Malla Reddy University), and Dr. S. Srinivasa Rao (Principal at Malla Reddy College of Engineering and Technology) were honored with prestigious awards at the National Teaching Excellence Awards 2024. Their remarkable contributions to the field of education were celebrated on National Education Day, highlighting their dedication, innovation, and impact on shaping future generations of learners.'
      },
      {
        images: ['images/NTEA4.jpg', 'images/NTEA9.jpg', 'images/NTEA3.jpg'],
        content: 'Dr. V. Madhusudhan, Dr. M. V. Kamal, and Dr. Naveen were also felicitated with distinguished awards at the National Teaching Excellence Awards 2024. Their exceptional dedication to education and impactful contributions to student development were acknowledged, highlighting their significant role in shaping the future of teaching.',
      },
      {
        images: ['images/NTEA6.jpg', 'images/NTEA2.jpg', 'images/NTEA10.jpg'],
        content: 'Additionally, Dr. Kodali Anuradha, Dr. C. Jayachandraiah, and Dr. Sanjeeva Polepaka shared their expertise, offering valuable perspectives on how educators can drive positive change and inspire the next generation of leaders.',
      },
    ],
  },
  {
    id: 2,
    title: 'RISE Awards for Best Interns',
    description:
      'In the Innovate Internship Program at DevElet, the RISE Award is given to top interns who demonstrate outstanding performance, active participation, and dedication throughout the internship.',
    slides: [
      {
        images: ['images/RISE1.jpg', 'images/RISE3.jpg', 'images/RISE2.jpg'],
        content: 'Pole Phanisri and Shaik Maseeroh (Interns from September Internship Batch) were honored with the prestigious RISE Award for their exceptional performance, dedication, and active participation throughout the Innovate Internship Program at DevElet.',
      },
    ], // Only one slide here
  },
];

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-heading">Highlights & Honors</h1>
      {events.map((event) => (
        <div
          key={event.id}
          className={`event-card ${event.id === 1 ? 'event-card-1' : 'event-card-2'}`} // Apply different background for event 1 and event 2
        >
          <div className="event-header">
            {event.id === 1 && <span className="event-date">{event.date}</span>} {/* Conditionally render date for event 1 */}
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>

          {/* Carousel Implementation */}
          <Carousel interval={3000} controls={event.id !== 2} indicators={event.id !== 2}>
            {event.slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <div className="event-images">
                  {slide.images.map((src, imgIndex) => (
                    <div key={imgIndex} className="gallery-item">
                      <img
                        className="d-block w-100"
                        src={src}
                        alt={`Slide ${index + 1} Image ${imgIndex + 1}`}
                        style={{ borderRadius: '10px' }} // Optional: Add rounded corners to the image
                      />
                    </div>
                  ))}
                </div>
                <div className="slide-content">
                  <p>{slide.content}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
