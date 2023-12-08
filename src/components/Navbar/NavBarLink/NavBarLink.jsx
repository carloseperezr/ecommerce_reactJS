import { NavLink } from "react-router-dom";

export const NavBarLink = ({ address, to }) => {
  return (
    <NavLink
      className="text-lg text-gray-500 hover:text-gray-300 px-5 py-3 "
      to={to}
      id={address}
    >
      {address}
    </NavLink>
  );
};
