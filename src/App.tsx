import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './component/About';
import Nav from './component/Nav';
import Footer from './component/Footer';
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
