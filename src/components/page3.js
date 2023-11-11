import React from "react";
import Lottie from "lottie-react";
import SkiilsAnimation from "../assets/skill.json";
import './styles/page3.css';

const Page3 = () => {
  const frontendSkills = [
    'React.js',
    'React Native',
    'HTML & CSS',
    'Tailwind CSS',
  ];

  const backendSkills = [
    'Node.js',
    'Firebase',
  ];

  const stateManagementSkills = [
    'Redux',
  ];

  const versionControlSkills = [
    'Git',
  ];

  const databaseSkills = [
    'Firebase Realtime Database',
    'Firebase Firestore',
  ];

  const webDevelopmentTools = [
    'Visual Studio Code',
    'Webpack',
    'Babel',
  ];

  const additionalSkills = [
    'Responsive Design',
    'API Integration',
    'Debugging & Testing',
    'UI/UX Design Principles',
  ];

  return ( 
    <div className='page3container'>
    <div className="animationpage3">
        <Lottie animationData={SkiilsAnimation} />
        </div>
    <div className='page3content'>
      <div>
      <h3 className='skillsfromtable'>Skills</h3>
      </div>
      <div className="table1">
      <div>
        <h3>Front-End Development:</h3>
        <ul>
          {frontendSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="rightsideskill">
        <h3>Back-End Development:</h3>
        <ul>
          {backendSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="table1">
      <div>
        <h3>State Management:</h3>
        <ul>
          {stateManagementSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      
      <div className="rightsideskill">
        <h3>Version Control:</h3>
        <ul>
          {versionControlSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      </div>
      <div className="table1">
      <div>
        <h3>Database Management:</h3>
        <ul>
          {databaseSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Web Development Tools:</h3>
        <ul>
          {webDevelopmentTools.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      </div>
      
      <div>
        <h3>Additional Skills:</h3>
        <ul>
          {additionalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Page3;
