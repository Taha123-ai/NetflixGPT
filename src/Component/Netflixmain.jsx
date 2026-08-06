import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
import useTopratedmovies from "../Hooks/useTopratedmovies";
import useUpcomingmovie from "../Hooks/useupcomingmovie";
import usePopularmovies from "../Hooks/usepopularmovies";

const Netflixmain = () => {
  useNowplayingmovies();
  useTopratedmovies();
  useUpcomingmovie();
  usePopularmovies();
  return (
    <div className="">
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Netflixmain;
