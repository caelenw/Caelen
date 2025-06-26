// src/App.js
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
