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

  const btntext =
              browselanguage[language].headerbtn.length > 8
                ? browselanguage[language].headerbtn.substring(0, 7).toUpperCase()
                : browselanguage[language].headerbtn
  return (

    <div className="bg-black min-h-screen">
      <Header val={language} />

      {/* Browse/Login Button */}
      <button
        className="fixed right-3 max-w-25 overflow-hidden  top-5 sm:right-6 sm:top-5 md:right-8 md:top-6 z-30
               h-7 sm:h-9 px-2 sm:px-4
               rounded-md bg-red-600
               text-[10px] sm:text-base font-bold text-white
               cursor-pointer whitespace-nowrap"
        onClick={navigateto}
      >
        
        {btntext}
      </button>

      {/* Hero Section */}
      <section className="relative h-[75vh] z-0 min-h-137.5 sm:h-[80vh] md:h-screen overflow-hidden">
        {/* Background */}
        <img
          alt="Background"
          src={netflixbg}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero Content */}
        <div
          className="absolute inset-0 z-10
                 flex items-center justify-center
                 px-5 sm:px-8 md:px-12
                 text-center text-white"
        >
          <div className="w-full max-w-4xl pt-10 sm:pt-12 md:pt-0">
            <h1
              className="font-sans
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                     font-bold tracking-tight leading-tight"
            >
              {browselanguage[language].infoh1}
            </h1>

            <h3
              className="pt-4 sm:pt-5 md:pt-6
                     text-base sm:text-lg md:text-xl
                     font-bold"
            >
              {browselanguage[language].infoh3}
            </h3>

            <p
              className="pt-4 sm:pt-5 md:pt-6
                     text-sm sm:text-base
                     font-medium"
            >
              {browselanguage[language].infop}
            </p>

            {/* Email + Button */}
            <div
              className="my-4 sm:my-5
                     flex flex-col sm:flex-row
                     items-stretch sm:items-center
                     justify-center
                     gap-3 sm:gap-2
                     w-full max-w-2xl mx-auto"
            >
              <input
                placeholder="Email address"
                className="w-full sm:flex-1
                       rounded-md
                       border border-gray-500
                       bg-black/50
                       px-4 py-3 sm:py-4
                       text-sm sm:text-base
                       text-white
                       outline-none"
              />

              <button
                className="w-full sm:w-auto
                       rounded-md
                       bg-red-600
                       px-6 sm:px-8 md:px-10
                       py-3
                       text-lg sm:text-xl md:text-2xl
                       font-bold
                       cursor-pointer
                       whitespace-nowrap"
              >
                {browselanguage[language].trybtn}
              </button>
            </div>

            <p className="text-xs sm:text-sm md:text-base">
              {browselanguage[language].paymentdescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-black text-white">
        <div
          className="mx-auto
                 w-full
                 max-w-7xl
                 px-4 sm:px-6 md:px-8 lg:px-10
                 py-8 sm:py-10 md:py-12"
        >
          {/* Movies */}
          <Movielist
            Title={browselanguage[language].movielisttitle}
            movies={movies}
          />

          {/* Features */}
          <section className="mt-8 sm:mt-10">
            <h2 className="text-xl sm:text-2xl font-bold">
              {browselanguage[language].browse_secboxtitle}
            </h2>

            <div
              className="mt-5 grid
                     grid-cols-1
                     sm:grid-cols-2
                     lg:grid-cols-4
                     gap-4 sm:gap-5 lg:gap-6"
            >
              {/* Card 1 */}
              <div
                className="min-h-45
                       rounded-3xl
                       p-5
                       bg-linear-to-b
                       from-[#1b2348]
                       via-[#24162f]
                       to-[#1a0f19]"
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {browselanguage[language].card1top}
                </div>

                <div className="pt-3 text-sm sm:text-base text-gray-100">
                  {browselanguage[language].card1bottom}
                </div>
              </div>

              {/* Card 2 */}
              <div
                className="min-h-45
                       rounded-3xl
                       p-5
                       bg-linear-to-b
                       from-[#1b2348]
                       via-[#24162f]
                       to-[#1a0f19]"
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {browselanguage[language].card2top}
                </div>

                <div className="pt-3 text-sm sm:text-base text-gray-100">
                  {browselanguage[language].card2bottom}
                </div>
              </div>

              {/* Card 3 */}
              <div
                className="min-h-45
                       rounded-3xl
                       p-5
                       bg-linear-to-b
                       from-[#1b2348]
                       via-[#24162f]
                       to-[#1a0f19]"
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {browselanguage[language].card3top}
                </div>

                <div className="pt-3 text-sm sm:text-base text-gray-100">
                  {browselanguage[language].card3bottom}
                </div>
              </div>

              {/* Card 4 */}
              <div
                className="min-h-45
                       rounded-3xl
                       p-5
                       bg-linear-to-b
                       from-[#1b2348]
                       via-[#24162f]
                       to-[#1a0f19]"
              >
                <div className="text-xl sm:text-2xl font-bold">
                  {browselanguage[language].card4top}
                </div>

                <div className="pt-3 text-sm sm:text-base text-gray-100">
                  {browselanguage[language].card4bottom}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-8 sm:mt-10 pb-10">
            <h2 className="mb-4 text-xl sm:text-2xl font-bold">
              {browselanguage[language].queryheading}
            </h2>

            {/* FAQ 1 */}
            <div className="mb-3">
              <div
                className="flex min-h-15 items-center
                       w-full
                       bg-neutral-700
                       px-4 py-4
                       text-lg sm:text-xl md:text-2xl
                       font-semibold
                       hover:bg-neutral-600
                       cursor-pointer"
                onClick={() => handleaccordian(1)}
              >
                {browselanguage[language].query1top}
              </div>

              {index === 1 && (
                <div
                  className="w-full
                         border-t-2 border-black
                         bg-neutral-700
                         p-4 sm:p-5
                         text-sm sm:text-base md:text-lg
                         font-semibold"
                >
                  {browselanguage[language].query1answer}
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="mb-3">
              <div
                className="flex min-h-15 items-center
                       w-full
                       bg-neutral-700
                       px-4 py-4
                       text-lg sm:text-xl md:text-2xl
                       font-semibold
                       hover:bg-neutral-600
                       cursor-pointer"
                onClick={() => handleaccordian(2)}
              >
                {browselanguage[language].query2top}
              </div>

              {index === 2 && (
                <div
                  className="w-full
                         border-t-2 border-black
                         bg-neutral-700
                         p-4 sm:p-5
                         text-sm sm:text-base md:text-lg
                         font-semibold"
                >
                  {browselanguage[language].query2answer}
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="mb-3">
              <div
                className="flex min-h-15 items-center
                       w-full
                       bg-neutral-700
                       px-4 py-4
                       text-lg sm:text-xl md:text-2xl
                       font-semibold
                       hover:bg-neutral-600
                       cursor-pointer"
                onClick={() => handleaccordian(3)}
              >
                {browselanguage[language].query3top}
              </div>

              {index === 3 && (
                <div
                  className="w-full
                         border-t-2 border-black
                         bg-neutral-700
                         p-4 sm:p-5
                         text-sm sm:text-base md:text-lg
                         font-semibold"
                >
                  {browselanguage[language].query3answer}
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="mb-3">
              <div
                className="flex min-h-15 items-center
                       w-full
                       bg-neutral-700
                       px-4 py-4
                       text-lg sm:text-xl md:text-2xl
                       font-semibold
                       hover:bg-neutral-600
                       cursor-pointer"
                onClick={() => handleaccordian(4)}
              >
                {browselanguage[language].query4top}
              </div>

              {index === 4 && (
                <div
                  className="w-full
                         border-t-2 border-black
                         bg-neutral-700
                         p-4 sm:p-5
                         text-sm sm:text-base md:text-lg
                         font-semibold"
                >
                  {browselanguage[language].query4answer}
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="mb-3">
              <div
                className="flex min-h-15 items-center
                       w-full
                       bg-neutral-700
                       px-4 py-4
                       text-lg sm:text-xl md:text-2xl
                       font-semibold
                       hover:bg-neutral-600
                       cursor-pointer"
                onClick={() => handleaccordian(5)}
              >
                {browselanguage[language].query5top}
              </div>

              {index === 5 && (
                <div
                  className="w-full
                         border-t-2 border-black
                         bg-neutral-700
                         p-4 sm:p-5
                         text-sm sm:text-base md:text-lg
                         font-semibold"
                >
                  {browselanguage[language].query5answer}
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div>
              <div
                className="flex min-h-15 items-center
                       w-full
                       bg-neutral-700
                       px-4 py-4
                       text-lg sm:text-xl md:text-2xl
                       font-semibold
                       hover:bg-neutral-600
                       cursor-pointer"
                onClick={() => handleaccordian(6)}
              >
                {browselanguage[language].query6top}
              </div>

              {index === 6 && (
                <div
                  className="w-full
                         border-t-2 border-black
                         bg-neutral-700
                         p-4 sm:p-5
                         text-sm sm:text-base md:text-lg
                         font-semibold"
                >
                  {browselanguage[language].query6answer}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Browse;
