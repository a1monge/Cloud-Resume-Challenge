import React from 'react';

const Projects = () => (
  <section className="section">
    <h2>Projects</h2>
    <ul>
      <li><span className="project-title"><a href="https://a1monge.github.io/my-portfolio/" target="_blank" rel="noopener noreferrer">Portfolio Website</a></span><br />
        My website showcases my skills, projects, and experience, highlighting detailed project descriptions, live demos,
        technical skills, professional experience, and certifications. Proven ability in building and deploying applications
        using AWS, React, and Django. Strong problem-solving skills and commitment to continuous learning.
      </li>
      <li><span className="project-title"><a href="https://github.com/a1monge/Data-Analytics-Proof-Of-Concept" target="_blank" rel="noopener noreferrer">Data Analytics Proof of Concept</a></span><br />
        This project demonstrates a data analytics solution using AWS-managed services. It involves the ingestion, transformation,
        storage, and visualization of clickstream data for a restaurant owner who wants to derive insights from menu item orders.
      </li>
      <li><span className="project-title"><a href="https://github.com/a1monge/Serverless-Web-Backend-on-AWS" target="_blank" rel="noopener noreferrer">Serverless Web Backend</a></span><br />
        This project demonstrates a serverless web backend architecture using various AWS services. The architecture is designed
        to handle spikes in demand efficiently and ensure decoupled application components. The solution was implemented for a
        hypothetical customer who sells cleaning supplies and experiences fluctuating web traffic.
      </li>
    </ul>
  </section>
);

export default Projects;
