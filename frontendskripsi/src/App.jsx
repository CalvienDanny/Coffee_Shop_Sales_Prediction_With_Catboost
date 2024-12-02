// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Calendar from './kalender/Calendar';
import Settings from './setting/Settings';
import Home from './home/Home';
import Header from './Header';
import Aboutus from './aboutus/Aboutus';
import Report from './report/Reports';
import Recomendation from './recomendation/recomendation';
import './App.css';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kalender" element={<Calendar />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/aboutus" element={<Aboutus />} /> 
          <Route path="/" element={<Header />} />
          <Route path='/report' element={<Report />} />
          <Route path='/recomendation' element={<Recomendation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;