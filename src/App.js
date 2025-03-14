// App.js
import React, { useState } from 'react';
// Import the icons you need
import { 
  FaHome, 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin, 
  FaYoutube, 
  FaBloggerB 
} from 'react-icons/fa';

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
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1rem',
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

// Testimonials section styles (more vibrant & readable)
const testimonialSectionStyle = {
  background: 'linear-gradient(135deg, #ff9a9e, #fad0c4)', // new brighter gradient
  color: '#333',               // darker text color for better contrast
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
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // semi-opaque white background
  borderRadius: '8px',
  padding: '1.5rem',
  maxWidth: '400px',
  textAlign: 'left',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)', // subtle drop shadow
};

const quoteStyle = {
  fontStyle: 'italic',
  marginBottom: '1rem',
  color: '#555',       // slightly darker text
  fontSize: '1.1rem',  // increase font size a bit
  lineHeight: '1.6',   // better line spacing
};

const authorStyle = {
  fontWeight: 'bold',
  color: '#111',       // darker color for emphasis
  fontSize: '1rem',
};

// =====================
// CTA Section: BLUE BACKGROUND + ICON LINKS
// =====================
const ctaSectionStyle = {
  backgroundColor: '#343a40', // match the navbar color
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
  // State to track which section is active
  const [activeSection, setActiveSection] = useState('home');

  // State to toggle contact info in the CTA section
  const [showContact, setShowContact] = useState(false);

  const handleGetInTouchClick = () => {
    setShowContact((prev) => !prev);
  };

  return (
    <div style={bodyStyle}>
      {/* Navbar */}
      <nav style={navBarStyle}>
        <button onClick={() => setActiveSection('home')} style={navLinkStyle}>
          <FaHome size={20} style={{ marginRight: '0.5rem' }} />
          Home
        </button>
        <button onClick={() => setActiveSection('about')} style={navLinkStyle}>
          About
        </button>
        <button onClick={() => setActiveSection('education')} style={navLinkStyle}>
          Education
        </button>
        <button onClick={() => setActiveSection('skills')} style={navLinkStyle}>
          Skills
        </button>
        <button onClick={() => setActiveSection('experience')} style={navLinkStyle}>
          Experience
        </button>
        <button onClick={() => setActiveSection('projects')} style={navLinkStyle}>
          Projects
        </button>
      </nav>

      {/* When Home is active, display ALL sections */}
      {activeSection === 'home' && (
        <>
          {/* Hero Section */}
          <section id="hero" style={heroSectionStyle}>
            <h1 style={heroTitleStyle}>Ike Mathebula</h1>
            <p style={heroSubtitleStyle}>
            IT Desktop Support Specialist &amp; Full Stack Software Engineer
            </p>
          </section>
        </>
      )}

      {/* About Section: Display if Home or About is active */}
      {(activeSection === 'home' || activeSection === 'about') && (
        <section id="about" style={sectionContainerStyle}>
          <div style={aboutSectionStyle}>
            <img style={aboutImageStyle} src={ikeProfileImg} alt="Ike Mathebula" />
            <div style={aboutTextStyle}>
              <h2 style={aboutTitleStyle}>About Me</h2>
              <p>
              I’m a passionate IT Desktop Support Specialist and Full Stack Software Engineer currently at African Resonance, a leading provider of payment solutions across Africa. With over 5 years of experience, I specialize in delivering exceptional technical support, effective problem-solving, and efficient system administration.

              </p>
              <p>
              Holding a Certificate in Software Engineering from ALX Africa, I'm proficient in various programming languages and frameworks, and I enjoy creating innovative solutions through software development and collaboration.
              </p>
              I’m driven, continuously learning, and eager to contribute to projects where I can leverage my skills to make a real impact.
              <p>
              Feel free to contact me directly at:
              📞 +27 71 987 2501 <strong>📧 ikemathebula@gmail.com</strong>.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Education Section: Display if Home or Education is active */}
      {(activeSection === 'home' || activeSection === 'education') && (
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
              Diploma in Computer Networking & other certifications...
            </li>
          </ul>
        </section>
      )}

      {/* Skills Section: Display if Home or Skills is active */}
      {(activeSection === 'home' || activeSection === 'skills') && (
        <section id="skills" style={sectionContainerStyle}>
          <h2 style={sectionTitleStyle}>Technical Skills</h2>
          <ul>
            <li>IT Desktop Support &amp; System Administration</li>
            <li>Full Stack Software Development (Python, JavaScript, HTML/CSS, etc.)</li>
            <li>Database Management: MySQL, SQLite, H2</li>
            <li>Technical Troubleshooting &amp; IT Security</li>
            <li>Endpoint Management &amp; Network Administration</li>
          </ul>
        </section>
      )}

      {/* Experience Section: Display if Home or Experience is active */}
      {(activeSection === 'home' || activeSection === 'experience') && (
        <section id="experience" style={sectionContainerStyle}>
          <h2 style={sectionTitleStyle}>Professional Experience</h2>
          <ul>
            <li>
              IT Desktop Support / System Administrator, African Resonance (March 2017 – Present)
              <ul>
                <li>Provided comprehensive technical support for desktops, laptops, and peripherals.</li>
                <li>Installed, configured, and maintained operating systems and software applications.</li>
                <li>Managed user accounts, permissions, and implemented robust IT security measures.</li>
                <li>Led initiatives to streamline IT support processes...</li>
                <li>Collaborated with IT teams to plan and execute system upgrades...</li>
                <li>Recognized for outstanding customer service and problem-solving skills.</li>
              </ul>
            </li>
          </ul>
        </section>
      )}

      {/* Projects Section: Display if Home or Projects is active */}
      {(activeSection === 'home' || activeSection === 'projects') && (
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
                A comprehensive job board application for managing job listings, built with React and Spring Boot.
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
                A clone of the popular AirBnB platform, built using full-stack technologies (React, Flask, SQL).
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
      )}

      {/* Testimonials Section (Always Visible) */}
      <section style={testimonialSectionStyle}>
        <h2>What people say about my work!</h2>
        <div style={testimonialContainerStyle}>
          {/* Testimonial 1 */}
          <div style={testimonialCardStyle}>
            <p style={quoteStyle}>
              “Ike Mathebula's work is nothing short of exceptional. As the Director of Dyslexia Foundations Nigeria, I have had the privilege of witnessing his commitment to excellence. His innovative approach to problem-solving and his dedication to creating meaningful impact are truly admirable.”
            </p>
            <p style={authorStyle}>
              Pastor Ben Aitopa, Director, Dyslexia Foundations
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

      {/* CTA Section (Always Visible) */}
      <section style={ctaSectionStyle}>
        <h2 style={ctaTitleStyle}>Let’s Build Something Great!</h2>
        <button style={ctaButtonStyle} onClick={handleGetInTouchClick}>
        Contact Me
        </button>

        {showContact && (
          <div style={ctaContactInfoStyle}>
            {/* Example: Email link with icon */}
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:ikemathebula@gmail.com"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                <FaEnvelope style={{ marginRight: '0.4rem' }} />
                ikemathebula@gmail.com
              </a>
            </p>

            {/* LinkedIn link with icon */}
            <p>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/ike-mathebula-810268a3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                <FaLinkedin style={{ marginRight: '0.4rem' }} />
                Ike Mathebula
              </a>
            </p>

            {/* GitHub link with icon */}
            <p>
              <strong>GitHub:</strong>{' '}
              <a
                href="https://github.com/ikemathebula"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', textDecoration: 'none' }}
              >
                <FaGithub style={{ marginRight: '0.4rem' }} />
                github.com/ikemathebula
              </a>
            </p>

            {/* CV link */}
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

            {/* YouTube and Blog icons (optional) */}
            <p style={{ marginTop: '1rem' }}>
              {/* YouTube icon */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', marginRight: '1rem' }}
              >
                <FaYoutube size={24} />
              </a>
              {/* Blog icon */}
              <a
                href="https://your-blog-link.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff', marginRight: '1rem' }}
              >
                <FaBloggerB size={24} />
              </a>
            </p>
          </div>
        )}
      </section>

      {/* Footer (Always Visible) */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} Ike Mathebula - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
