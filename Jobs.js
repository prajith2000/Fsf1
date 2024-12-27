import React, { useState } from 'react';
import './Jobs.css';

function Jobs() {

  const jobData = [
    {
      id: 1,
      title: 'Client Onboarding Specialist',
      company: 'Vaave',
      location: 'Hyderabad (In Office Only)',
      posted: '7 days',
    },
    {
      id: 2,
      title: 'Accounts Executive',
      company: 'Chitrakars',
      location: 'Hyderabad',
      posted: '9 days',
    },
    {
      id: 3,
      title: 'Software Engineer Intern',
      company: 'Techify',
      location: 'Bangalore (Remote)',
      posted: '5 days',
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      company: 'BrandBuzz',
      location: 'Mumbai (Hybrid)',
      posted: '2 weeks',
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      company: 'DesignCraft',
      location: 'Delhi (In Office Only)',
      posted: '3 weeks',
    },
  ];

  const [jobs] = useState(jobData);

  return (
    <section id="jobs" className="jobs-section">
      <h1>Job Board</h1>
      <div className="job-filters">
        <button className="filter-button active">Showing All Jobs</button>
      </div>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <p className="job-source">Sourced from Partner Network</p>
            <h2 className="job-title">{job.title}</h2>
            <p className="job-company">{job.company}</p>
            <p className="job-location">{job.location}</p>
            <p className="job-posted">Posted {job.posted} ago</p>
            <a
              href="https://www.naukri.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="view-more"
            >
              View More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Jobs;
