import React from 'react';
import './Develet_team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const DeveletTeam = () => {
    const teamMembers = [
        {
            name: 'Dr. Sesha Talpa Sai',
            role: 'Director',
            description: '34 years of expertise in Academia, Industry, and Research, Mentored 12 startups, secured 15 patents (including 3 International), published over 40 journals',
            imageUrl: 'images/saisir.jpg',
            socialLinks: {
                facebook: '#',
                twitter: '#',
                linkedin: 'https://www.linkedin.com/in/dr-p-h-v-sesha-talpa-sai-54a443bb/'
            }
        },
        {
            name: 'Kishan Tiwari',
            role: 'Chief Executive Officer',
            description: 'Visionary leader with a robust foundation in Software Engineering. Excellence at transforming business needs into cutting-edge software solutions',
            imageUrl: 'images/kishan.png',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/kishan-tiwari-40917b228/'
            }
        },
        {
            name: 'Katakam Jaswanthi',
            role: 'Chief Operating Officer',
            description: 'Innovative Software Engineer skilled in turning visionary concepts into practical software solutions, enhancing business performance through technical excellence and creativity.',
            imageUrl: 'images/jaswanthi.jpeg',
            socialLinks: {
                linkedin: 'https://www.linkedin.com/in/katakam-jaswanthi-54b337247/'
            }
        },
    ];

    return (
        <div className="develet-team-container">
            <h2 className="develet-team-title">Meet Our Team</h2>
            <div className="develet-team-cards">
                {teamMembers.map((member, index) => (
                    <div key={index} className="develet-team-card">
                        <div className="develet-team-image-container">
                            <img src={member.imageUrl} alt={member.name} className="develet-team-image" />
                        </div>
                        <h3 className="develet-team-name">{member.name}</h3>
                        <p className="develet-team-description">{member.description}</p>
                        <p className="develet-team-role">{member.role}</p>
                        <div className="develet-team-socials">
                            {member.socialLinks.linkedin && (
                                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="develet-team-social-icon">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DeveletTeam;
