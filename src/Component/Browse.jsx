import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { netflixbg } from "../utils/const";
import usePopularmovies from "../Hooks/usepopularmovies";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import { useState } from "react";
import browselanguage from "../utils/browselanguage";

const Browse = () => {
  const navigate = useNavigate();
  const language = useSelector((store) => store?.configlang?.Lang);
  const [index, setindex] = useState(null);
  usePopularmovies();
  const movies = useSelector((store) => store.movies.popular);
  if (!movies) {
    return (
      <div className="h-screen w-screen">
        <iframe
          src="https://assets.pinterest.com/ext/embed.html?id=982558843711490184"
          frameborder="0"
          scrolling="no"
          className="h-full w-full scale-100"
        ></iframe>
      </div>
    );
  }
  const handleaccordian = (val) => {
    val === index ? setindex(null) : setindex(val);
  };
  const navigateto = () => {
    navigate("/login");
  };
  return (
    <div>
      <Header />
      <button
        className="px-3 pb-1 rounded-md text-white font-bold bg-red-600 fixed z-10 cursor-pointer right-8 top-6.25"
        onClick={navigateto}
      >
        {browselanguage[language].headerbtn}
      </button>
      <img
        alt="Background"
        src={netflixbg}
        className="h-screen w-screen object-cover"
      ></img>
      <div className="  bg-black/60 absolute h-full w-full inset-0 "></div>
      <div className="absolute top-60 left-115 w-5/12 pt-5 text-center   text-white ">
        <h1 className="font-sans text-6xl font-bold tracking-tight ">
          {browselanguage[language].infoh1}
        </h1>
        <h3 className="text-xl font-bold pt-6">
          {browselanguage[language].infoh3}
        </h3>
        <p className="pt-6 font-medium">{browselanguage[language].infop}</p>
        <div className="my-3 flex justify-center items-center gap-x-2">
          <input
            placeholder="Email address"
            className="py-4 pl-3 pr-15 rounded-md border border- bg-black/50 "
          ></input>
          <button className="px-10 py-3  rounded-md bg-red-600 font-bold text-2xl cursor-pointer">
            {browselanguage[language].trybtn}
          </button>
        </div>
        <p>{browselanguage[language].paymentdescription}</p>
      </div>
      <div className="bg-black">
        <div className="mx-35">
          <div>
            <Movielist
              Title={browselanguage[language].movielisttitle}
              movies={movies}
            />
          </div>
          <div>
            <div className="text-2xl mt-6 font-bold text-white">
              {browselanguage[language].browse_secboxtitle}
            </div>
            <div className="grid grid-cols-4 gap-6 mt-5 ">
              <div className="rounded-3xl p-5  shadow- bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold ">
                  {browselanguage[language].card1top}
                </div>
                <div className="text-gray-100 pt-3">
                  {browselanguage[language].card1bottom}
                </div>
              </div>
              <div className="rounded-3xl p-5 bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold">
                  {browselanguage[language].card2top}
                </div>
                <div className="text-gray-100 pt-3">
                  {browselanguage[language].card2bottom}
                </div>
              </div>
              <div className="rounded-3xl p-5 bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold">
                  {browselanguage[language].card3top}
                </div>
                <div className="text-gray-100 pt-3">
                  {browselanguage[language].card3bottom}
                </div>
              </div>
              <div className="rounded-3xl p-5 bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold">
                  {browselanguage[language].card4top}
                </div>
                <div className="text-gray-100 pt-3">
                  {browselanguage[language].card4bottom}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-white text-2xl font-bold mb-4">
                {browselanguage[language].queryheading}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(1)}
                >
                  {browselanguage[language].query1top}
                </div>
                {index === 1 && (
                  <div className="w-full text-gray-100  bg-neutral-700 border-black border-t-2 text-lg font-semibold p-5 transition-all duration-500 ease-in-out">
                    {browselanguage[language].query1answer}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(2)}
                >
                  {browselanguage[language].query2top}
                </div>
                {index === 2 && (
                  <div className="w-full text-gray-100  bg-neutral-700 border-black border-t-2 text-lg font-semibold p-5">
                    {browselanguage[language].query2answer}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(3)}
                >
                  {browselanguage[language].query3top}
                </div>
                {index === 3 && (
                  <div className="w-full text-gray-100  bg-neutral-700 border-black border-t-2 text-lg font-semibold p-5">
                    {browselanguage[language].query3answer}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(4)}
                >
                  {browselanguage[language].query4top}
                </div>
                {index === 4 && (
                  <div className="w-full text-gray-100  bg-neutral-500 border-black border-t-2 text-lg font-semibold p-5">
                    {browselanguage[language].query4answer}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(5)}
                >
                  {browselanguage[language].query5top}
                </div>
                {index === 5 && (
                  <div className="w-full text-gray-100  bg-neutral-600 border-black border-t-2 text-lg font-semibold p-5">
                    {browselanguage[language].query5answer}
                  </div>
                )}
              </div>
              <div className="pb-10">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(6)}
                >
                  {browselanguage[language].query6top}
                </div>
                {index === 6 && (
                  <div className="w-full text-gray-100  bg-neutral-600 border-black border-t-2 text-lg font-semibold p-5">
                    {browselanguage[language].query6answer}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
