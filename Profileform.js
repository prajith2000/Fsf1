import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profileform.css';

const ProfileForm = ({ setProfiles }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    profilePicture: null,
    contactNumber: '',
    emailAddress: '',
    collegeName: '',
    graduationYear: '',
    degree: '',
    specialization: '',
    studentId: '',
    batchYear: '',
    currentEmployer: '',
    jobTitle: '',
    industry: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfiles((prevProfiles) => [...prevProfiles, formData]);
    navigate('/ProfileDetails');
  };

  return (
    <div className="profile-form-container">
      <h1>Alumni Profile Form</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>Full Name</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Date of Birth</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />

        <label>Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Profile Picture</label>
        <input type="file" onChange={handleFileChange} accept="image/*" required />

        <label>Contact Number</label>
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

        <label>Email Address</label>
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required />

        <label>College/University Name</label>
        <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />

        <label>Year of Graduation</label>
        <input type="number" name="graduationYear" value={formData.graduationYear} onChange={handleChange} required />

        <label>Degree</label>
        <input type="text" name="degree" value={formData.degree} onChange={handleChange} required />

        <label>Specialization</label>
        <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} required />

        <label>Student ID</label>
        <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} required />

        <label>Batch Year</label>
        <input type="number" name="batchYear" value={formData.batchYear} onChange={handleChange} required />

        <label>Current Employer</label>
        <input type="text" name="currentEmployer" value={formData.currentEmployer} onChange={handleChange} />

        <label>Job Title</label>
        <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />

        <label>Industry</label>
        <input type="text" name="industry" value={formData.industry} onChange={handleChange} />

        <label>Year of Experience</label>
        <input type="number" name="experience" value={formData.experience} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;