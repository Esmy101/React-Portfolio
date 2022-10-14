import React, { useState } from "react";

export default function Resume() {
  const [resume] = useState(
    "https://docs.google.com/document/d/12xhlzqK5HWuLAVh9L3m1BVi4pIzkUOLKgyoKHd9yE5A/edit?usp=sharing"
  );
  return (
    <div className="page">
      <h1>Resume</h1>
      <p>
        Download my{" "}
        <a className="resume" href={resume}>
          resume
        </a>
      </p>
      <div className="frontEnd">
        <h3>Front-end Proficiencies</h3>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Bootstrap</li>
      </div>

      <div className="backEnd">
        <h3>Back-end Proficiencies</h3>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </div>
    </div>
  );
}
