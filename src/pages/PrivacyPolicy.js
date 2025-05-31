// Create: src/pages/PrivacyPolicy.js
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav style={{ padding: '20px 0' }}>
              <Link to="/" className="btn btn-outline-primary">← Back to Home</Link>
            </nav>
            
            <h1>Privacy Policy</h1>
            <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
            
            <h2>Information We Collect</h2>
            <p>This website may collect the following information:</p>
            <ul>
              <li>Contact information when you reach out through the contact form</li>
              <li>Basic analytics data about website usage</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries</li>
              <li>Improve our website experience</li>
            </ul>
            
            <h2>Contact</h2>
            <p>If you have any questions about this Privacy Policy, please contact us through our contact form.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;