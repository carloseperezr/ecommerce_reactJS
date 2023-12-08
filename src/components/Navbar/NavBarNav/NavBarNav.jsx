import { NavBarLink } from "../NavBarLink/NavBarLink";

export const NavBarNav = () => {
  return (
    <div className=" w-auto flex justify-evenly mr-14 z-50">
      <NavBarLink address="Home" to="/" />
      <NavBarLink address="Store" to="/store" />
      <NavBarLink address="Cart" to="/cart" />
    </div>
  );
};
