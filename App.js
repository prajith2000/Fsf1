import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alumni from './components/Alumni';
import Events from './components/Events';
import News from './components/News';
import Jobs from './components/Jobs';
import Networks from './components/Networks';
import Login from './components/Login';
import Signup from './components/Signup';
import Profileform from './components/Profileform';
import ProfileDetails from './components/ProfileDetails';

function App() {
  const [profiles, setProfiles] = useState([]); 

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Alumni />} />
          <Route path="/events" element={<Events />} />
          <Route path="/news" element={<News />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/JoinNetwork" element={<Networks />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          
          <Route path="/Profileform" element={<Profileform setProfiles={setProfiles} />} />
          <Route path="/ProfileDetails" element={<ProfileDetails profiles={profiles} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
