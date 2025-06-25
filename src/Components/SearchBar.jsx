import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ inputedCountry }) => {
  return (
    <div className="relative custom-text-color ">
      <input
        onChange={(event) => {
          inputedCountry(event.target.value.toLowerCase());
        }}
        type="search"
        placeholder="Search for a country..."
        className=" py-3 ps-16 pe-3 sm:w-[450px] w-full sm:placeholder:text-[14px]
         placeholder:text-[12px] shadow-sm rounded-md bg-elements"
      />
      <IoMdSearch className="absolute top-3  left-5 text-2xl" />
    </div>
  );
};

export default SearchBar;
