import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './screens/Home';
import OpeningWell from './screens/OpeningWell';
import SchoolRally from './screens/SchoolRally';
import RoadBlock from './screens/RoadBlock';
import ChildLabour from './screens/ChildLabour';
import Education from './screens/Education';
import GameOver from './screens/GameOver';
import GameWon from './screens/GameWon';



function App() {

  useEffect(() => {
    document.title = 'Game of justice';
    return () => {
      document.title = 'Game of justice';
    };
  }, []);

  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OpeningWell" element={<OpeningWell/>} />
          <Route path="/SchoolRally" element={<SchoolRally/>} />
          <Route path="/RoadBlock" element={<RoadBlock/>} />
          <Route path="/ChildLabour" element={<ChildLabour/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/GameOver" element={<GameOver/>} />
          <Route path="/GameWon" element={<GameWon/>} />
          </Routes>
    </Router>
  );
}

export default App;
