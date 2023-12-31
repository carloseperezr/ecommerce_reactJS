import React from "react";

export const CarouselImage = ({ img }) => {
  return (
    <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img
        src={img}
        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        alt="..."
      />
    </div>
  );
};
