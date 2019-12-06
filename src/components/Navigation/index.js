import React from "react";
import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav style={{ position: "relative", zIndex: "10" }}>
      <ul>
        <li>
          <NavLink exact to="/question">
            Question
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/email">
            Email
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/badges">
            Badge Display
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
