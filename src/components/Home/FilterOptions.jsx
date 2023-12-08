import React from "react";

export const FilterOptions = ({
  forLabel,
  label,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
}) => {
  return (
    <div className="flex items-center p-5">
      <label
        for={forLabel}
        class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={label}
        class="block w-96 p-2 mb-1 ml-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>All</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
        <option value={value3}>{value3}</option>
        <option value={value4}>{value4}</option>
        <option value={value5}>{value5}</option>
        <option value={value6}>{value6}</option>
        <option value={value7}>{value7}</option>
        <option value={value8}>{value8}</option>
      </select>
    </div>
  );
};
