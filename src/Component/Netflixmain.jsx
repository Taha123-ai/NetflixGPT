import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopratedmovies from "../Hooks/useTopratedmovies";
import useUpcomingmovie from "../Hooks/useupcomingmovie";
import { useSelector } from "react-redux";
import usePopularmovies from "../Hooks/usePopularmovies";

const Netflixmain = () => {
  const language = useSelector((store) => store?.configlang?.Lang);
  usePopularmovies();
  useNowplayingmovies();
  useTopratedmovies();
  useUpcomingmovie();
  return (
    <div>
      <Header val={language} />
      <Maincontainer val={language} />
      <Secondarycontainer val={language} />
    </div>
  );
};

export default Netflixmain;
