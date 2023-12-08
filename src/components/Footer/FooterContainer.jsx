import { FooterLeftContainer } from "./Footer/FooterLeft/FooterLeftContainer";
import { FooterCenterContainer } from "./Footer/FooterCenter/FooterCenterContainer";
import { FooterRightContainer } from "./Footer/FooterRight/FooterRightContainer";
export const FooterContainer = () => {
  return (
    <div className="flex col justify-between bg-slate-900 p-5">
      <FooterLeftContainer />
      <FooterCenterContainer />
      <FooterRightContainer />
    </div>
  );
};
