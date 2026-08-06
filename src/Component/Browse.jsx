import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { netflixbg } from "../utils/const";
import usePopularmovies from "../Hooks/usepopularmovies";
import { useSelector } from "react-redux";
import Movielist from "./Movielist";
import { useState } from "react";

const Browse = () => {
  const navigate = useNavigate();
  const [index, setindex] = useState(null);
  usePopularmovies();
  const movies = useSelector((store) => store.movies.popular);
  if (!movies) {
    return <div>Loading...</div>;
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
        Sign In{" "}
      </button>
      <img
        alt="Background"
        src={netflixbg}
        className="h-screen w-screen object-cover"
      ></img>
      <div className="  bg-black/60 absolute h-full w-full inset-0 "></div>
      <div className="absolute top-60 left-115 w-5/12 pt-5 text-center   text-white ">
        <h1 className="font-sans text-6xl font-bold tracking-tight ">
          Unlimited movies, shows, and more
        </h1>
        <h3 className="text-xl font-bold pt-6">
          Plans start at ₹149. Cancel anytime.
        </h3>
        <p className="pt-6 font-medium">
          Ready to watch? Enter your email to start your membership
        </p>
        <div className="my-3 flex justify-center items-center gap-x-2">
          <input
            placeholder="Email address"
            className="py-4 pl-3 pr-15 rounded-md border border- bg-black/50 "
          ></input>
          <button className="px-10 py-3  rounded-md bg-red-600 font-bold text-2xl cursor-pointer">
            Try 30 Days for ₹0
          </button>
        </div>
        <p>New members only. Terms below.</p>
      </div>
      <div className="bg-black">
        <div className="mx-35">
          <div>
            <Movielist Title={"Trending"} movies={movies} />
          </div>
          <div>
            <div className="text-2xl mt-6 font-bold text-white">
              More reasons to join
            </div>
            <div className="grid grid-cols-4 gap-6 mt-5 ">
              <div className="rounded-3xl p-5  shadow- bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold ">
                  Enjoy on your TV
                </div>
                <div className="text-gray-100 pt-3">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                  Blu-ray players and more.
                </div>
              </div>
              <div className="rounded-3xl p-5 bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold">
                  Download your shows to watch offline
                </div>
                <div className="text-gray-100 pt-3">
                  Save your favourites easily and always have something to
                  watch.
                </div>
              </div>
              <div className="rounded-3xl p-5 bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold">
                  Watch everywhere
                </div>
                <div className="text-gray-100 pt-3">
                  Stream unlimited movies and TV shows on your phone, tablet,
                  laptop, and TV.
                </div>
              </div>
              <div className="rounded-3xl p-5 bg-linear-to-b from-[#1b2348] via-[#24162f] to-[#1a0f19]">
                <div className="text-white text-2xl font-bold">
                  Create profiles for kids
                </div>
                <div className="text-gray-100 pt-3">
                  Send kids on adventures with their favourite characters in a
                  space made just for them — free with your membership.
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="text-white text-2xl font-bold mb-4">
                Frequently Asked Questions
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(1)}
                >
                  What is Netflix?
                </div>
                {index === 1 && (
                  <div className="w-full text-gray-100  bg-neutral-700 border-black border-t-2 text-lg font-semibold p-5 transition-all duration-500 ease-in-out">
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices. You can
                    watch as much as you want, whenever you want, without a
                    single ad – all for one low monthly price. There's always
                    something new to discover, and new TV shows and movies are
                    added every week!
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(2)}
                >
                  How much does Netflix cost?
                </div>
                {index === 2 && (
                  <div className="w-full text-gray-100  bg-neutral-700 border-black border-t-2 text-lg font-semibold p-5">
                    New members can try 30 days of Netflix for ₹0. After the
                    free trial ends, your plan will automatically renew at the
                    regular price depending on the plan you select. Plans range
                    from ₹149 to ₹649. Watch Netflix on your smartphone, tablet,
                    Smart TV, laptop or streaming device. No extra costs, cancel
                    at anytime.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(3)}
                >
                  Where can I watch?
                </div>
                {index === 3 && (
                  <div className="w-full text-gray-100  bg-neutral-700 border-black border-t-2 text-lg font-semibold p-5">
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles. You can
                    also download your favourite shows with the iOS or Android
                    app. Use downloads to watch while you're on the go and
                    without an internet connection. Take Netflix with you
                    anywhere.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(4)}
                >
                  What can I watch on Netflix?
                </div>
                {index === 4 && (
                  <div className="w-full text-gray-100  bg-neutral-500 border-black border-t-2 text-lg font-semibold p-5">
                    Netflix has an extensive library of feature films,
                    documentaries, shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(5)}
                >
                  How do I cancel?
                </div>
                {index === 5 && (
                  <div className="w-full text-gray-100  bg-neutral-600 border-black border-t-2 text-lg font-semibold p-5">
                    Netflix is flexible. You can easily cancel your account
                    online in two clicks. There are no cancellation fees – start
                    or stop your account anytime.
                  </div>
                )}
              </div>
              <div className="pb-10">
                <div
                  className="w-full text-gray-100 text-2xl font-semibold px-4 bg-neutral-700 hover:bg-neutral-600 py-5 cursor-pointer"
                  onClick={() => handleaccordian(6)}
                >
                  Is Netflix good for kids?
                </div>
                {index === 6 && (
                  <div className="w-full text-gray-100  bg-neutral-600 border-black border-t-2 text-lg font-semibold p-5">
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and films in their own space. Kids profiles come with
                    PIN-protected parental controls that let you restrict the
                    maturity rating of content kids can watch and block specific
                    titles you don’t want kids to see.
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
