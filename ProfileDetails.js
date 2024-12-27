import React from 'react';
import './profiledetails.css';

const ProfileDetails = ({ profiles }) => {
  return (
    <div className="profile-details-container">
      <h1>Profile Details</h1>
      <div className="profile-cards-wrapper">
        {profiles.map((profile, index) => (
          <div key={index} className="profile-card">
            <h3>{profile.fullName}</h3>
            <p>Date of Birth: {profile.dob}</p>
            <p>Gender: {profile.gender}</p>
            {profile.profilePicture && (
              <img
                src={URL.createObjectURL(profile.profilePicture)}
                alt="Profile"
                className="profile-picture"
              />
            )}
            <p>Contact Number: {profile.contactNumber}</p>
            <p>Email Address: {profile.emailAddress}</p>
            <p>College/University Name: {profile.collegeName}</p>
            <p>Year of Graduation: {profile.graduationYear}</p>
            <p>Degree: {profile.degree}</p>
            <p>Specialization: {profile.specialization}</p>
            <p>Student ID: {profile.studentId}</p>
            <p>Batch Year: {profile.batchYear}</p>
            <p>Current Employer: {profile.currentEmployer}</p>
            <p>Job Title: {profile.jobTitle}</p>
            <p>Industry: {profile.industry}</p>
            <p>Year of Experience: {profile.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;
