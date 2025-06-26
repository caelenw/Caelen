import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />  {/* Make sure this exists */}

        </Routes>
      </main>
    </>
  );
}

export default App;
