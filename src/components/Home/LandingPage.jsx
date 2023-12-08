import { Button } from "../Button/Button";
import { CarsPreviewCars } from "./CarsPreviewCars";
import { FilterOptions } from "./FilterOptions";
import { LandingTitle } from "./LandingTitle";

export const LandingPage = () => {
  const buttonClasses =
    "text-lg p-3 w-auto mx-3 px-8 mb-10 bg-slate-600 rounded bg-slate-700 text-gray-300";

  return (
    <div
      className="flex flex-col w-full h-screen -my-20
    bg-[url(https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/delorean-2024-alpha5-ev-11.jpg)] 
     bg-cover"
    >
      <div className="flex h-5/6 my-20 flex-col align-middle justify-between items-center">
        <LandingTitle />
      </div>
    </div>
  );
};
