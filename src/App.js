import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result'
import About from './pages/About'
import Message from './pages/Message'
import Faqs from './pages/Faqs'
import Appointment from './pages/Appointment'
import ProjectOverview from './components/ProjectOverview'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="box-sizing:border-box bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project-overview/:title" element={<ProjectOverview />} />
      </Routes>
    </div>
  );
}

export default App;
