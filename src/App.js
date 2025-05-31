// import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";

// Keep your existing home page as a component
function HomePage() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;