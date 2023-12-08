import { FooterLogo } from "./FooterLogo";
import { FooterLeftDetails } from "./FooterLeftDetails";

export const FooterLeftContainer = () => {
  return (
    <div className="flex flex-col w-4/12 ml-10 justify-center">
      <FooterLogo />
      <FooterLeftDetails details="Where the cars of your dreams live" />
    </div>
  );
};
