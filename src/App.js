import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
