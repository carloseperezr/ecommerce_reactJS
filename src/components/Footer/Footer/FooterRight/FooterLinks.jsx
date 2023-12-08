import { NavLink } from "react-router-dom";

export const FooterLinks = () => {
  return (
    <div className="flex justify-end items-center">
      <div className="flex">
        <NavLink className="p-5 text-lg" to="/">
          Home
        </NavLink>
      </div>
      <div className="flex">
        <NavLink className="p-5 text-lg" to="/store">
          Store
        </NavLink>
        <NavLink className="p-5 text-lg" to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
};
