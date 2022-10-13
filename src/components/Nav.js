import React from "react";

export default function Nav() {
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
        <div style={linkStyle}>
          <a className="nav" href="#">
            About Me
          </a>
        </div>
        <div style={linkStyle}>
          <a className="nav" href="#">
            Portfolio
          </a>
        </div>
        <div style={linkStyle}>
          <a className="nav" href="#">
            Contact
          </a>
        </div>
        <div style={linkStyle}>
          <a className="nav" href="Resume">
            Resume
          </a>
        </div>
      </section>
    </nav>
  );
}
