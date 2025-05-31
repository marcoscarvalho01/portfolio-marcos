// import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function TestHome() {
  return (
    <div className="container" style={{ padding: '100px 0', color: 'white' }}>
      <h1>Test Home Page</h1>
      <p>If you can see this, routing is working correctly.</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;