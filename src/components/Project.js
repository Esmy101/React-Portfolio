import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
//main layout for a project
export default function Project(props) {
  const [content, setContent] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer = null;
    console.log(content);
    if (showContent) {
      if (!content) {
        setContent(true);
      }
      if (timer != null) {
        return () => clearTimeout(timer);
      }
    } else {
      timer = setTimeout(() => {
        setContent(false);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [showContent]);

  return (
    <>
      <img
        src={props.img}
        onMouseOver={() => {
          setShowContent(true);
        }}
        onMouseLeave={() => {
          setShowContent(false);
        }}
      ></img>

      {content ? (
        <div className="">
          <a href={props.app}>
            <p className="projectName">{props.title}</p>
          </a>
          <a href={props.github}>
            <FaGithub className="projectGit" />
          </a>
        </div>
      ) : null}
    </>
  );
}
