import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

// Header Component
const Header = () => (
  <header className="header">
    <h1 className="title">Jafor Sadak's Bio Data</h1>
    <p className="subtitle">Software Developer & Tech Enthusiast</p>
    <nav className="navbar">
      <ul className="navList">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
);

// Main Content Component
const MainContent = () => (
  <main>
    <ProfileSection />
    <AboutMeSection />
    <EducationSection />
    <SkillsSection />
    <LanguageSection />
  </main>
);

// Profile Section
const ProfileSection = () => (
  <section className="profileSection" id="home">
    <div className="leftColumn">
      <ProfileImage />
      <ProfileInfo />
    </div>
    <div className="rightColumn">
      <ProfileDetails />
    </div>
  </section>
);

// Profile Image Component
const ProfileImage = () => (
  <img 
    src="https://media.licdn.com/dms/image/v2/D5603AQFcNEKtw6X5HQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698139714386?e=2147483647&v=beta&t=ueEUB6ZBnF4PK5LY3QVPxyyLRiT0CvGoRJAfRAKaANM" 
    alt="Profile of Jafor Sadak" 
    className="profileImage" 
  />
);

// Profile Info Component
const ProfileInfo = () => (
  <>
    <h2 className="name">Jafor Sadak</h2>
    <p className="occupation">Software Developer</p>
    <p className="location">City, Country</p>
    <p className="contact">
      Get in touch: 
      <a href="mailto:jafor15-4159@diu.edu.bd" className="email"> jafor15-4159@diu.edu.bd</a>
    </p>
  </>
);

// Profile Details Component
const ProfileDetails = () => (
  <>
    <DetailRow label="Date of Birth:" value="11th July 2002" />
    <DetailRow label="Nationality:" value="Bangladeshi" />
    <DetailRow label="Religion:" value="Islam" />
    <DetailRow label="Cell Phone:" value="01924520137" />
    <DetailRow label="Address:" value="26/3 Zigatola, Dhanmondi, Dhaka" />
  </>
);

// Detail Row Component
const DetailRow = ({ label, value }) => (
  <div className="detailRow">
    <span className="label">{label}</span>
    <span className="value">{value}</span>
  </div>
);

// About Me Section
const AboutMeSection = () => (
  <section className="aboutSection" id="about">
    <h2 className="aboutTitle">About Me</h2>
    <p className="aboutText">
      Welcome to my profile! My name is Jafor Sadak, and I'm currently pursuing my bachelor's in Computer Science and Engineering at Daffodil International University. I'm deeply passionate about technology and enjoy exploring its various facets, including attending events like Google I/O Extend in 2022 and 2023.
    </p>
    <p className="aboutText">
      I have participated in the ICPC Preliminary in 2021 and 2022 and am a former member of the BNCC at Birshreshtha Munshi Abdur Rouf Public College. I also work as a content creator for a convention center and am an active member of BD Clean.
    </p>
  </section>
);

// Education Section
const EducationSection = () => (
  <section className="educationSection" id="education">
    <h2 className="educationTitle">Educational Qualifications</h2>
    <EducationList />
  </section>
);

// Education List Component
const EducationList = () => (
  <ul>
    <EducationDetail 
      institution="Bachelor of Science in Computer Science and Engineering" 
      info="Daffodil International University, Dhaka, Bangladesh. Expected Graduation: 2025" 
    />
    <EducationDetail 
      institution="Higher Secondary Certificate (HSC)" 
      info="Birshreshtha Munshi Abdur Rouf Public College, Dhaka. Year of Completion: 2020" 
    />
    <EducationDetail 
      institution="Secondary School Certificate (SSC)" 
      info="Zigatola High School, Dhaka. Year of Completion: 2018" 
    />
  </ul>
);

// Education Detail Component
const EducationDetail = ({ institution, info }) => (
  <li className="educationDetail">
    <span className="institution">{institution}</span><br />
    <span className="educationInfo">{info}</span>
  </li>
);

// Skills Section
const SkillsSection = () => (
  <section className="skillsSection" id="skills">
    <h2 className="skillsTitle">Skills</h2>
    <SkillsList />
  </section>
);

// Skills List Component
const SkillsList = () => (
  <ul className="skillsList">
    <li>Programming Languages: JavaScript, Python, C++</li>
    <li>Web Development: HTML, CSS, React.js</li>
    <li>Database Management: MySQL, MongoDB</li>
    <li>IoT Development: Arduino, ESP32</li>
    <li>Version Control: Git, GitHub</li>
  </ul>
);

// Language Section
const LanguageSection = () => (
  <section className="languageSection" id="languages">
    <h2 className="languageTitle">Language Proficiency</h2>
    <LanguageList />
  </section>
);

// Language List Component
const LanguageList = () => (
  <ul className="languageList">
    <li>English & Bengali: Good at Listening, Speaking, Writing, and Reading</li>
    <li>Hindi & Urdu: Good at Listening</li>
  </ul>
);

// Contact Form Component
const ContactForm = () => {
  const [message, setMessage] = React.useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwmuX3h3-c3t1jfGwQSKMLFPOzHtfRe2GdAKuHiVM_wHp-9ErtufRg5V7IRcnUxeBRj/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ message }),
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      alert('Error sending message: ' + error);
    }
    setMessage('');
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <textarea
        className="messageInput"
        placeholder="Write your message here..."
        value={message}
        onChange={handleChange}
        rows="4"
      />
      <button type="submit" className="sendButton">Send</button>
    </form>
  );
};

// Footer Section
const Footer = () => (
  <footer id="contact">
    <ContactForm />
    <p>&copy; 2024 Jafor Sadak. All rights reserved.</p>
  </footer>
);

export default App;

