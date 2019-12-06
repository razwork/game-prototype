import React from "react";
import classNames from "classnames";

export function Card(props) {
  const classes = classNames({
    box: true,
    question: props.question
  });
  return <div className={classes}>{props.children}</div>;
}

export function CardContent(props) {
  return <div className={"box" + props.addClass}>{props.children}</div>;
}

export function Profile(props) {
  return (
    <div className="profile absolute offset-left">
      <img src={props.profile} alt={props.description} />
    </div>
  );
}

export function Username(props) {
  return <h3 className="user-title">{props.name}</h3>;
}
