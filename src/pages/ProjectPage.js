import React from "react";
import Project from "../components/Project";

//Layout info for each project
export default function Projects() {
  return (
    <div className="page">
      <h1>Portfolio</h1>
      <div className="Projects">
        <Project
          img="./assets/ParkMe.gif"
          title="Park Me"
          app="https://calihuddleston.github.io/park-me/index.html"
          github="https://github.com/calihuddleston/park-me"
        />
      </div>
      <div className="Projects">
        <Project
          img="./assets/rabbitHabit.png"
          title="Rabbit Habit"
          app="https://rabit-habit.herokuapp.com/login"
          github="https://github.com/BillyFletcher99/Rabit-Habit"
        />
      </div>
    </div>
  );
}
