import React from 'react';
import Header from './components/Header';
import Objective from './components/Objective';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import EmploymentHistory from './components/EmploymentHistory';
import Skills from './components/Skills';
import VisitorCounter from './components/VisitorCounter';
import './App.css';

function App() {
  return (
    <div className="container mt-4">
      <VisitorCounter/>
      <Header />
      <Objective />
      <Education />
      <Projects />
      <Certifications />
      <EmploymentHistory />
      <Skills />
    </div>
  );
}

export default App;
