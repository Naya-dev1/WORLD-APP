import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const EachCountry = ({ perCountry }) => {
  const navigate = useNavigate();

  const borders = perCountry.borders
    ? perCountry.borders.map((border) => {
        return <p className=" px-6 py-2 shadow-md bg-elements ">{border}</p>;
      })
    : "No border for this country";

  const currencies = perCountry?.currencies
    ? perCountry.currencies[0].name
    : "No currency for this country";
  return (
    <div className="sm:px-20 px-4  pb-8 sm:pb-[200px] custom-text-color">
      <div
        onClick={() => {
          navigate("/", { replace: true });
          window.location.reload();
        }}
        className="sm:my-[70px] my-8 shadow-md sm:w-30 w-20 flex items-center 
        justify-between sm:px-6 px-3 sm:py-2 py-1 rounded-md bg-elements "
      >
        <BsArrowLeft />
        <p className="sm:text-[16px] text-[12px]">Back</p>
      </div>

      {/* ============================== */}
      <div className="flex sm:flex-row flex-col w-full sm:gap-[150px] gap-[40px] sm:items-center mt-16 sm:mt-0 ">
        <img
          src={perCountry.flags.png}
          alt=""
          className="sm:w-[550px] sm:h-[366px]"
        />

        <div className="flex flex-col items-start text-start sm:gap-[40px] gap-[20px] w-full">
          <h2 className="sm:text-[24px] text-[18px] font-extrabold">
            {perCountry.name}
          </h2>

          <div className="flex sm:flex-row flex-col items-start w-full gap-10 justify-between">
            <div className=" flex flex-col items-start gap-2.5 sm:text-[16px] text-[12px] ">
              <p>
                <b>Native Name: </b> {perCountry.nativeName}
              </p>

              <p>
                <b>Population: </b> {perCountry.population.toLocaleString()}
              </p>

              <p>
                <b>Region: </b> {perCountry.subregion}
              </p>

              <p>
                <b>Sub Region: </b> {perCountry.nativeName}
              </p>

              <p>
                <b>Capital: </b> {perCountry.capital}
              </p>
            </div>

            <div className=" flex flex-col items-start gap-2.5 sm:text-[16px] text-[12px]">
              <p>
                <b>Top Level Domain: </b> {perCountry.topLevelDomain}
              </p>

              <p>
                <b>Currencies: </b> {currencies}
              </p>

              <p>
                <b>Languages: </b> {perCountry.languages[0].name}
              </p>
            </div>
          </div>

          <div className="mt-5 mb-5 flex sm:flex-row flex-col sm:items-center gap-2 sm:text-[16px] text-[12px] ">
            <p className="">
              <b>Border Countries: </b>
            </p>
            <div className="grid sm:grid-cols-4 grid-cols-3 gap-1 items-center ">
              {borders}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCountry;
