import React from "react";

export const Button = ({ text, corners, functionOnClick, test, classes }) => {
  return <button className={classes}>{text}</button>;
};
