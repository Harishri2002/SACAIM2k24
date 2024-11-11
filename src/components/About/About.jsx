// About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="section">
        <h2 className="section-title">About St. Aloysius Deemed to be University:</h2>
        <p>
          St. Aloysius Deemed to be University, established in 1880 by the Society of Jesus in Mangalore, Karnataka,
          is a distinguished institution known for its commitment to academic excellence and holistic education. 
          With a strong Jesuit tradition, the university offers a diverse range of undergraduate, postgraduate, 
          and doctoral programs across various disciplines, including arts, science, commerce, and management. 
          Emphasizing research, innovation, and social responsibility, the university provides a vibrant learning 
          environment supported by modern infrastructure, making it a leading center for higher education in India.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">About the IT Department of Deemed to be University</h2>
        <p>
          The School of Information Science of Technology Department at St. Aloysius Deemed to be University, Mangalore, 
          is committed to providing top-tier education in Information Technology, offering undergraduate and postgraduate 
          programs that cover key areas such as programming, cybersecurity, and software engineering. Equipped with modern 
          labs and led by experienced faculty, the department emphasizes both theoretical knowledge and practical application. 
          Through industry collaborations, internships, and workshops, the department ensures that students are well-prepared 
          to meet the demands of the rapidly evolving tech industry. The postgraduate programs offered by the department include 
          MCA, M.Sc. in IT, M.Sc. in Big Data Analytics, M.Sc. in Data Science, and M.Sc. in Bioinformatics.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Details of Registration</h2>
        <table className="registration-table">
          <thead>
            <tr>
              <th></th>
              <th>Student and Research Scholars</th>
              <th>Academic and Industry Delegates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Participation</td>
              <td>500</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Paper Presentation</td>
              <td>1500</td>
              <td>2000</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2 className="section-title">Submission Guidelines</h2>
        <ul>
          <li>Research papers submitted should not be previously published.</li>
          <li>All accepted and presented papers published in the conference proceedings with ISSN no and DOI.</li>
          <li>Authors should take responsibilities for issues related to plagiarism (Must be less than 10%).</li>
          <li>Email ID to submit paper: sacaim@staloysius.ac.in</li>
          <li>Conference website</li>
          <li>Only the research articles accepted and presented during the conference will be considered for publication.</li>
          <li>Registration will be confirmed only after the payment of registration fee.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
