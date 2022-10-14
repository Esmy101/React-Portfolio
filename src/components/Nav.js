import React from "react";

export default function Nav(props) {
  const linkStyle = { border: "25px black", padding: "35px" };

  return (
    <nav>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <div style={linkStyle} onClick={() => props.navigate(props.pages.home)}>
          <a className="nav">About Me</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.portfolio)}
        >
          <a className="nav">Portfolio</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.contact)}
        >
          <a className="nav">Contact</a>
        </div>
        <div
          style={linkStyle}
          onClick={() => props.navigate(props.pages.resume)}
        >
          <a className="nav">Resume</a>
        </div>
      </section>
    </nav>
  );
}
