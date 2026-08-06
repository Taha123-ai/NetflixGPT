import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"
import useTopratedmovies from "../Hooks/useTopratedmovies";
import useUpcomingmovie from "../Hooks/useupcomingmovie";

const Netflixmain = () => {
  useNowplayingmovies();
  useTopratedmovies();
  useUpcomingmovie();
  return (
    <div >
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Netflixmain;
