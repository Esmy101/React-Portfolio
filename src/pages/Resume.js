import React, { useState } from "react";
export default function Nav() {
  const [resume, setResume] = useState(
    (href =
      "https://docs.google.com/document/d/12xhlzqK5HWuLAVh9L3m1BVi4pIzkUOLKgyoKHd9yE5A/edit?usp=sharing")
  );
  return (
    <div>
      <h1>Resume</h1>
      <p>Download my {resume}</p>

      <h3>Front-end Proficiencies</h3>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Bootstrap</li>
      <h3>Back-end Proficiencies</h3>
      <li>APIs</li>
      <li>Node</li>
      <li>Express</li>
      <li>MongoDB, Mongoose</li>
      <li>REST</li>
      <li>GraphQL</li>
    </div>
  );
}
