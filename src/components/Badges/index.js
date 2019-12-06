import React from "react";

export function Badges() {
  return (
    <span
      style={{
        fontSize: "2em"
      }}
    >
      <span
        className="badge"
        role="img"
        aria-label="badge"
        style={{
          display: "inline-block",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid white",
          boxShadow: "0 0 2px 0 rgba(0,0,0, .5)",
          background: "navy"
        }}
      >
        🤝
      </span>
      <span
        className="badge"
        role="img"
        aria-label="badge"
        style={{
          display: "inline-block",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid white",
          boxShadow: "0 0 2px 0 rgba(0,0,0, .5)",
          background: "lightblue",
          marginLeft: "-16px"
        }}
      >
        📣
      </span>
      <span
        className="badge"
        role="img"
        aria-label="badge"
        style={{
          display: "inline-block",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid white",
          boxShadow: "0 0 2px 0 rgba(0,0,0, .5)",
          background: "pink",
          marginLeft: "-16px"
        }}
      >
        🧠
      </span>
    </span>
  );
}
