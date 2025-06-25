import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const DropDown = ({ clickedRegion }) => {
  const [iconArrow, setIconArrow] = useState(false);

  const [regions, setRegions] = useState([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Polar",
    "Antarctic Ocean",
    "...",
  ]);

  const [pickedRegion, setPickedRegion] = useState("Filter by Region");
  return (
    <div
      onClick={() => {
        setIconArrow(!iconArrow);
      }}
      className="relative custom-text-color"
    >
      <div className=" py-3 px-5 flex items-center w-[200px] justify-between rounded-md shadow-sm cursor-pointer bg-elements  ">
        <p className="sm:text-sm text-[12px] ">{pickedRegion}</p>
        <MdKeyboardArrowDown
          className={`transform ${
            iconArrow ? "rotate-0" : "rotate-180"
          } transition-transform duration-500 ease-in-out `}
        />{" "}
      </div>

      {iconArrow && (
        <ul
          className="shadow-md py-3 flex flex-col gap-1 items-start text-sm font-light 
      absolute top-13 w-[200px] bg-white rounded-md text-start bg-elements"
        >
          {regions.map((region) => {
            return (
              <li
                onClick={() => {
                  setPickedRegion(
                    region === "..." ? "Filter by Region" : region
                  );
                  clickedRegion(region);
                }}
                className="cursor-pointer sm:text-[16px] text-[12px] px-5 py-1.5 hover:bg-gray-300 w-full"
              >
                {region}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
