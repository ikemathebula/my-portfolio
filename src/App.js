// App.js
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';

// Import images from the src/assets folder
import ikeProfileImg from './assets/ike_mathebula_profile.jpg';
import libraryManagementImg from './assets/library_management_system.jpg';
import jobSearchImg from './assets/job_search.png';
import airbnbCloneImg from './assets/airbnb_clone.png';

// Global body style
const bodyStyle = {
  margin: 0,
  padding: 0,
  fontFamily: 'Roboto, Arial, sans-serif',
  backgroundColor: '#f8f9fa',
  color: '#343a40',
  lineHeight: 1.6,
  scrollBehavior: 'smooth',
};

// Navbar styles
const navBarStyle = {
  position: 'sticky',
  top: 0,
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#343a40',
  padding: '1rem 0',
  zIndex: 9999,
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 500,
  margin: '0 1rem',
  display: 'flex',
  alignItems: 'center',
};

// Hero section styles
const heroSectionStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '4rem 1rem',
  textAlign: 'center',
};

const heroTitleStyle = {
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
};

const heroSubtitleStyle = {
  fontSize: '1.25rem',
  maxWidth: '600px',
  margin: '0.5rem auto 0',
};

// Container style for sections
const sectionContainerStyle = {
  width: '90%',
  maxWidth: '1200px',
  margin: '2rem auto',
};

// About section styles
const aboutSectionStyle = {
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1.5rem',
};

const aboutImageStyle = {
  width: '180px',
  height: '180px',
  borderRadius: '50%',
  objectFit: 'cover',
  flexShrink: 0,
};

const aboutTextStyle = {
  flex: 1,
};

const aboutTitleStyle = {
  marginTop: 0,
  marginBottom: '1rem',
  fontSize: '1.5rem',
  color: '#007bff',
  borderBottom: '1px solid #e9ecef',
  paddingBottom: '0.5rem',
};

// Section title style
const sectionTitleStyle = {
  marginBottom: '1.5rem',
  fontSize: '1.5rem',
  color: '#007bff',
  borderBottom: '1px solid #e9ecef',
  paddingBottom: '0.5rem',
};

// Project cards styles
const projectCardsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1.5rem',
};

const projectCardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

const projectImageStyle = {
  width: '100%',
  height: '180px',
  objectFit: 'cover',
  borderRadius: '8px',
  marginBottom: '1rem',
  backgroundColor: '#ddd',
};

const projectTitleStyle = {
  fontSize: '1.25rem',
  margin: '0.5rem 0',
  color: '#007bff',
};

const projectButtonContainerStyle = {
  display: 'flex',
  gap: '0.5rem',
  marginTop: '1rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 500,
};

const sourceCodeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#00bfff',
  color: '#fff',
};

const liveVersionButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#28a745',
  color: '#fff',
};

const techTagsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginTop: '0.5rem',
};

const techTagStyle = {
  backgroundColor: '#e9ecef',
  color: '#343a40',
  fontSize: '0.85rem',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
};

// Testimonials section styles (using a warm sunset gradient)
const testimonialSectionStyle = {
  background: 'linear-gradient(135deg, #f6d365, #fda085)',
  color: '#fff',
  padding: '4rem 1rem',
  textAlign: 'center',
};

const testimonialContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',
  flexWrap: 'wrap',
  marginTop: '2rem',
};

const testimonialCardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '1.5rem',
  maxWidth: '350px',
  textAlign: 'left',
};

const quoteStyle = {
  fontStyle: 'italic',
  marginBottom: '1rem',
};

const authorStyle = {
  fontWeight: 'bold',
};

// CTA Section styles (using a pinkish-orange gradient)
const ctaSectionStyle = {
  background: 'linear-gradient(135deg, #fa709a, #fee140)',
  color: '#fff',
  textAlign: 'center',
  padding: '4rem 1rem',
};

const ctaTitleStyle = {
  fontSize: '2rem',
  marginBottom: '1rem',
};

const ctaButtonStyle = {
  backgroundColor: '#fff',
  color: '#343a40',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '1rem',
  marginTop: '1rem',
};

const ctaContactInfoStyle = {
  marginTop: '2rem',
  lineHeight: 1.6,
};

// Footer style
const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#343a40',
  color: '#fff',
  marginTop: '2rem',
};

function App() {
  // State to toggle contact info in the CTA section
  const [showContact, setShowContact] = useState(false);

  const handleGetInTouchClick = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <div style={bodyStyle}>
      {/* Navbar with Home Icon */}
      <nav style={navBarStyle}>
        <a href="#hero" style={navLinkStyle}>
          <FaHome size={20} style={{ marginRight: '0.5rem' }} />
          Home
        </a>
        <a href="#about" style={navLinkStyle}>About</a>
        <a href="#education" style={navLinkStyle}>Education</a>
        <a href="#skills" style={navLinkStyle}>Skills</a>
        <a href="#experience" style={navLinkStyle}>Experience</a>
        <a href="#projects" style={navLinkStyle}>Projects</a>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Ike Mathebula</h1>
        <p style={heroSubtitleStyle}>
          Dedicated IT Desktop Support Professional &amp; Full Stack Software Engineer
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={sectionContainerStyle}>
        <div style={aboutSectionStyle}>
          <img
            style={aboutImageStyle}
            src={ikeProfileImg}
            alt="Ike Mathebula"
          />
          <div style={aboutTextStyle}>
            <h2 style={aboutTitleStyle}>About Me</h2>
            <p>
              I am a Desktop Support Technician at African Resonance, a leading provider
              of payment solutions and transaction processing services in Africa. With
              over five years of experience in the IT field, I have developed a range of
              skills and knowledge in technical support, network administration, and
              computer hardware. I have also earned multiple certifications from
              Coursera that demonstrate my proficiency and dedication in system
              administration, technical support fundamentals, and computer networking.
            </p>
            <p>
              Besides my technical skills, I have a Certificate in Software Engineering
              from alx_africa, where I learned how to design and build systems using
              various programming languages and frameworks. I enjoy working on
              open-source projects and contributing to the software community. My goal
              is to leverage my skills and experiences to create innovative and
              impactful solutions in the software engineering domain. I am always eager
              to learn new technologies and collaborate with other professionals who
              share my passion and vision.
            </p>
            <p>
              If you need to reach me quickly, feel free to call me at <strong>071 987 2501</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" style={sectionContainerStyle}>
        <h2 style={sectionTitleStyle}>Education & Certifications</h2>
        <ul>
          <li>
            Bachelor of Commerce in Information and Technology Management, Mancosa (2024 - Present)
          </li>
          <li>
            Certificate in Software Engineering, ALX Africa (September 2022 – October 2023)
          </li>
          <li>
            National Certificate in IT System Support, Training Force (2024)
          </li>
          <li>
            Google IT Certificates, Coursera (Technical Support Fundamentals, Networking, Operating Systems, System Administration, IT Security)
          </li>
          <li>
            Diploma in Computer Networking & other certifications in Operating Systems and IT support
          </li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" style={sectionContainerStyle}>
        <h2 style={sectionTitleStyle}>Technical Skills</h2>
        <ul>
          <li>IT Desktop Support &amp; System Administration</li>
          <li>Full Stack Software Development (Python, JavaScript, HTML/CSS, Java, JavaFX, React.js, Spring Boot)</li>
          <li>Database Management: MySQL, SQLite, H2</li>
          <li>Technical Troubleshooting &amp; IT Security</li>
          <li>Endpoint Management &amp; Network Administration</li>
        </ul>
      </section>

      {/* Experience Section */}
      <section id="experience" style={sectionContainerStyle}>
        <h2 style={sectionTitleStyle}>Professional Experience</h2>
        <ul>
          <li>
            IT Desktop Support / System Administrator, African Resonance Business Solutions (March 2017 – Present)
            <ul>
              <li>Provided comprehensive technical support for desktops, laptops, and peripherals.</li>
              <li>Installed, configured, and maintained operating systems and software applications.</li>
              <li>Managed user accounts, permissions, and implemented robust IT security measures.</li>
              <li>Led initiatives to streamline IT support processes, achieving a 92% reduction in ticket resolution time.</li>
              <li>Collaborated with IT teams to plan and execute system upgrades and automation projects.</li>
              <li>Recognized for outstanding customer service and problem-solving skills.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" style={sectionContainerStyle}>
        <h2 style={sectionTitleStyle}>Projects</h2>
        <div style={projectCardsContainer}>
          {/* Card 1: Library Management System */}
          <div style={projectCardStyle}>
            <img
              style={projectImageStyle}
              src={libraryManagementImg}
              alt="Library Management System"
            />
            <h3 style={projectTitleStyle}>Library Management System</h3>
            <p>
              A Java-based desktop application using JavaFX and SQLite/MySQL to manage library resources.
            </p>
            <div style={projectButtonContainerStyle}>
              <a
                href="https://github.com/ikemathebula/Library-Management-System.git"
                style={sourceCodeButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                SOURCE CODE
              </a>
              <a
                href="https://drive.google.com/file/d/1kmvWIiEpVsYSnc_qhynpalpY9SCL4ngp/view?usp=sharing"
                style={liveVersionButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE VERSION
              </a>
            </div>
            <div style={techTagsContainerStyle}>
              <span style={techTagStyle}>Java</span>
              <span style={techTagStyle}>JavaFX</span>
              <span style={techTagStyle}>MySQL</span>
            </div>
          </div>

          {/* Card 2: OfferMe Job Board */}
          <div style={projectCardStyle}>
            <img
              style={projectImageStyle}
              src={jobSearchImg}
              alt="OfferMe Job Board"
            />
            <h3 style={projectTitleStyle}>OfferMe Job Board</h3>
            <p>
              A comprehensive job board application for managing job listings and applications, built with React and Spring Boot.
            </p>
            <div style={projectButtonContainerStyle}>
              <a
                href="https://github.com/ikemathebula/OfferMe-Job-Board.git"
                style={sourceCodeButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                SOURCE CODE
              </a>
              <a
                href="https://drive.google.com/file/d/19lNYe10PnWcsWZHcdoMfbVfOIgbwiZ-X/view?usp=sharing"
                style={liveVersionButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                LIVE VERSION
              </a>
            </div>
            <div style={techTagsContainerStyle}>
              <span style={techTagStyle}>React</span>
              <span style={techTagStyle}>Spring Boot</span>
              <span style={techTagStyle}>MySQL</span>
            </div>
          </div>

          {/* Card 3: AirBnB Clone */}
          <div style={projectCardStyle}>
            <img
              style={projectImageStyle}
              src={airbnbCloneImg}
              alt="AirBnB Clone"
            />
            <h3 style={projectTitleStyle}>AirBnB Clone</h3>
            <p>
              A clone of the popular AirBnB platform, built using full-stack technologies including React, Flask, and SQL.
            </p>
            <div style={projectButtonContainerStyle}>
              <a
                href="https://github.com/ikemathebula/AirBnB_clone.git"
                style={sourceCodeButtonStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                SOURCE CODE
              </a>
              <button type="button" style={liveVersionButtonStyle} disabled>
                LIVE VERSION
              </button>
            </div>
            <div style={techTagsContainerStyle}>
              <span style={techTagStyle}>React</span>
              <span style={techTagStyle}>Flask</span>
              <span style={techTagStyle}>SQL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={testimonialSectionStyle}>
        <h2>What people say about my work!</h2>
        <div style={testimonialContainerStyle}>
          {/* Testimonial 1 */}
          <div style={testimonialCardStyle}>
            <p style={quoteStyle}>
              “Ike Mathebula's work is nothing short of exceptional. As the Director of Dyslexia Foundations Nigeria, I have had the privilege of witnessing his commitment to excellence. His innovative approach to problem-solving and his dedication to creating meaningful impact are truly admirable.”
            </p>
            <p style={authorStyle}>
              Pastor Ben Aitopa, Director, Dyslexia Foundations, 
            </p>
          </div>
          {/* Testimonial 2 */}
          <div style={testimonialCardStyle}>
            <p style={quoteStyle}>
              “Working with this talented individual has been an absolute pleasure. His creativity knows no bounds, and his work as a digital creator is truly commendable. I highly recommend him for his exceptional skills and unwavering dedication to excellence.”
            </p>
            <p style={authorStyle}>
            Software Engineer, Atlanta, GA, USA
            </p>
          </div>
          {/* Testimonial 3 */}
          <div style={testimonialCardStyle}>
            <p style={quoteStyle}>
              “I am thoroughly impressed with the technical prowess and problem-solving abilities demonstrated by this remarkable software engineer. His ability to navigate complex challenges and deliver innovative solutions is truly commendable.”
            </p>
            <p style={authorStyle}>
              Lungile H, IT Technician, South Africa
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Interested in Working Together?</h2>
        <button style={ctaButtonStyle} onClick={handleGetInTouchClick}>
          GET IN TOUCH
        </button>
        {showContact && (
          <div style={ctaContactInfoStyle}>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:ikemathebula@gmail.com" style={{ color: '#fff' }}>
                ikemathebula@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/ike-mathebula-810268a3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                Ike Mathebula
              </a>
            </p>
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/ikemathebula"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                github.com/ikemathebula
              </a>
            </p>
            <p>
              <strong>Download my CV:</strong>{' '}
              <a
                href="https://drive.google.com/file/d/1DRHFXhMYwl1w5G9e5F4pJFPkDTPFcOeL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'underline' }}
              >
                View/Download
              </a>
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Ike Mathebula - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
