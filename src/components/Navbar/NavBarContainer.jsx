import { NavBarNav } from "../Navbar/NavBarNav/NavBarNav";
import { NavBarLogo } from "../Navbar/NavBarLogo/NavBarLogo";
export const NavBarContainer = () => {
  return (
    <div className="flex justify-between p-1 bg-gradient-to-r z-10 items-center ">
      <NavBarLogo to="/" />
      <NavBarNav />
    </div>
  );
};
