import React from "react";

function Education() {
  return (
    <div className="education-page">
      <div className="page-header">
        <span className="eyebrow">Education</span>
        <h1 className="section-heading">Academic background</h1>
      </div>

      <div className="edu-grid">
        <article className="edu-card">
          <h3>Nanyang Technological University</h3>
          <p><strong>Double Degree in Business and Computer Science</strong></p>
          <p>2020 – 2025</p>
          <p><strong>Bachelor of Computing in Computer Science</strong> · Honours (Distinction)</p>
          <p><strong>Bachelor of Business</strong> · Honours (Distinction)</p>

          <p><strong>Academic specialisations:</strong></p>
          <ul>
            <li>Business Analytics</li>
            <li>Data Science and Analytics</li>
            <li>Cyber Security</li>
          </ul>
        </article>

        <article className="edu-card">
          <h3>Hwa Chong Institution</h3>
          <p><strong>GCE A-Level</strong></p>
          <p>2018 – 2019</p>
          <ul>
            <li>H2 Mathematics</li>
            <li>H2 Physics</li>
            <li>H2 Chemistry</li>
            <li>H2 Economics</li>
          </ul>
          <p><strong>Achievements:</strong> Singapore Schools Sports Council Colours Award — Water Polo (2018, 2019)</p>
        </article>
      </div>
    </div>
  );
}

export default Education;
