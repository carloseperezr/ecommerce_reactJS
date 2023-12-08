import React from "react";

export const ProductIsLoading = () => {
  return (
    <div className="container px-5 py-0 mt-10 mx-auto">
      <div className="flex flex-col w-full mb-20">
        <div className="flex w-full justify-start items-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Loading...
          </h1>
          <p className="leading-relaxed ml-5">Loading...</p>
        </div>
        <img
          alt="Loading"
          className="rounded-t-2xl inset-0 w-full h-full"
          src="https://wallpapers.com/images/hd/gray-gradient-background-2xq7z1tdzm1ohwbk.jpg"
        />
      </div>
      <div className="bg-red-500 p-10 -mt-20">
        <h4 className="text-3xl text-gray-300">Loading...</h4>
        <small className="text-2xl text-gray-300"> Loading...</small>
      </div>
    </div>
  );
};
