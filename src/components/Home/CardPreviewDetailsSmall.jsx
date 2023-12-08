import React from "react";

export const CardPreviewDetailsSmall = ({
  modelo,
  nombre,
  price,
  fuel,
  image,
}) => {
  return (
    <div className="w-80 h-auto p-1  rounded-lg saturate-50 ease-in-out duration-200 hover:saturate-150">
      <div>
        <img className="rounded-t-lg h-56" src={image} alt={nombre} />
        <div className="p-5 bg-gray-500">
          <div>
            <div className="flex justify-between items-center py-5 border-b-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {nombre}
              </h5>
              <p className=" text-gray-900 dark:text-white">${price}</p>
            </div>
            <div>
              <p className="flex flex-row justify-end mb-3 font-normal text-gray-500 dark:text-gray-200">
                <p className="px-2 mt-3">{modelo}</p>
                <p className="px-2 mt-3">{fuel}</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
