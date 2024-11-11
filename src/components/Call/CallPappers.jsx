import React from "react";
import "../About/About.css";

const CallForPapers = () => {
  return (
    <div className="call-for-papers-page">
      <div className="section">
        <h2 className="section-title">Call for Papers:</h2>
        <p>
          SACAIM invites authors to contribute to the conference by submitting original, unpublished articles that illustrate Research results, Research Projects, Methodologies, Algorithms, surveys/Reviews, Case studies, and Industrial experiences that describe significant advances in the field of Computational Intelligence in the following areas:
        </p>
        <div className="topics-grid">
          <ul>
            <li>Internet of Things</li>
            <li>Big Data Analytics</li>
            <li>Optimization Algorithms</li>
            <li>Machine Learning</li>
            <li>Data Mining</li>
            <li>Soft Computing</li>
            <li>Neural Networks</li>
            <li>Evolutionary Engineering</li>
            <li>Cyber Security</li>
          </ul>
          <ul>
            <li>Fuzzy Logic Systems</li>
            <li>Swarm Intelligence</li>
            <li>Genetic Algorithms</li>
            <li>Ad-hoc-wireless Networks</li>
            <li>Mobile Satellite Networks</li>
            <li>Applied Cryptography</li>
            <li>Mobility Protocols</li>
            <li>Information Security</li>
            <li>Wireless Sensor Networks</li>
          </ul>
          <ul>
            <li>Interactive Communication</li>
            <li>Computational Mathematics</li>
            <li>Computational Statistics</li>
            <li>Business analytics</li>
            <li>Block Chain Technology</li>
            <li>Digital Health Technologies</li>
            <li>Agriculture Intelligent Systems</li>
            <li>Management Information Systems</li>
            <li>E-Governance</li>
          </ul>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Important Dates:</h2>
        <table className="dates-table">
          <tbody>
            <tr><td>Submission of Research Articles</td><td>26 November, 2024</td></tr>
            <tr><td>Notification of Acceptance</td><td>28 November, 2024</td></tr>
            <tr><td>Camera Ready Copy/Poster submission</td><td>1st December, 2024</td></tr>
            <tr><td>Last Date for Participant Registration</td><td>2nd December, 2024</td></tr>
            <tr><td>Conference dates</td><td>5-6 th December, 2024</td></tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">General Guidelines</h2>
        <p>Accommodation will be provided on prior request to the conference conveners. Certificates will be issued only for the registered participants attending the conference on both days.</p>
      </div>

      <div className="section">
        <h2 className="section-title">Publication</h2>
        <p>All accepted and presented papers will be published in conference proceedings of the conference with ISSN and DOI.</p>
      </div>

      <div className="contact-info">
        <p><strong>For Further Details Contact:</strong></p>
        <p>Dr. Santhosh B +91 9448249590 | Dr. Jeevan L J Pinto +91 9448952025</p>
      </div>
    </div>
  );
};

export default CallForPapers;
