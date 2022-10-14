import React from "react";
import Project from "../components/Project";

export default function Projects() {
  return (
    <div className="page">
      <h1>Portfolio</h1>
      <div className="Projects">
        <Project img="./assets/ParkMe.gif" />
        <Project img="./assets/rabbitHabit.png" />
      </div>
    </div>
  );
}
