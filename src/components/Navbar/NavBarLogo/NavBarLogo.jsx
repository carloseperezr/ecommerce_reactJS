import React from "react";
import { Link } from "react-router-dom";

export const NavBarLogo = ({ to }) => {
  return (
    <Link
      className="font-Hyperwave px-5 py-3 text-5xl z-50 text-gray-300"
      to={"/"}
    >
      HYPERWAVE
    </Link>
  );
};
