import React from 'react';
import './Committee.css';

function Committee() {
  return (
    <div className="committee-page">
      <h1 className="title">ORGANIZING COMMITTEE</h1>

      <div className="columns">
        {/* Left Column */}
        <div className="column">
          <div className="committee-section">
            <h2 className="section-title">Chief Patron:</h2>
            <p>Rev Dr Praveen Martis SJ,<br />
               Vice Chancellor,<br />
               St Aloysius (DEEMED TO BE UNIVERSITY)<br />
               Institute of Management and IT
            </p>
          </div>

          <div className="committee-section">
            <h2 className="section-title">Patron:</h2>
            <p>Dr (Fr) Kiran Cotha SJ, Director,<br />
               St Aloysius (DEEMED TO BE UNIVERSITY)<br />
               Institute of Management and IT
            </p>
          </div>

          <div className="committee-section">
            <h2 className="section-title">General Chair:</h2>
            <p>Dr Hemalatha N<br />
               Dean, SIST, AIMIT
            </p>
          </div>

          <div className="committee-section">
            <h2 className="section-title">Convener:</h2>
            <p>Dr Santosh B<br />
               Associate Professor<br />
               SIST, AIMIT<br />
               Dr Jeevan L J Pinto,<br />
               Associate Professor<br />
               SIST, AIMIT
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="column">
          <div className="committee-section">
            <h2 className="section-title">Organizing Committee</h2>
            <p>Dr Ruban S,<br />
               Associate Professor,<br />
               HOD (MSc ST), SIST, AIMIT<br />
               Dr Rakesh Kumar,<br />
               Associate Professor,<br />
               HOD (MSc BDA & Data Science), SIST, AIMIT<br />
               Dr Shine P Varkey,<br />
               Assistant Professor,<br />
               HOD (MSc BI), SIST, AIMIT<br />
               Dr Srinivas B.L,<br />
               Associate Professor,<br />
               SIST, AIMIT<br />
               Dr Roshan Suvaris,<br />
               Assistant Professor,<br />
               SIST, AIMIT
            </p>
          </div>

          <div className="committee-section">
            <h2 className="section-title">Advisory Committee</h2>
            <p>Prof Amena Mahmoud,<br />
               Department of Computer Science,<br />
               Faculty of Computers and Information,<br />
               KafrElshiekh University, Egypt<br />
               Prof Eiko Takaoka,<br />
               Dept. of Info & Com Sciences,<br />
               Faculty of Science & Technology,<br />
               Sophia University, Tokyo JAPAN<br />
               Dr Ashish Gupta,<br />
               Professor, BITS Pilani, Dubai<br />
               Dr Manjaiah DH,<br />
               Professor, Department of Computer Science<br />
               Mangalore University<br />
               ... [Continue listing each member as shown in your image]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Committee;
