import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopratedmovies from "../Hooks/useTopratedmovies";
import useUpcomingmovie from "../Hooks/useUpcomingmovie";
import { useDispatch, useSelector } from "react-redux";
import usePopularmovies from "../Hooks/usePopularmovies";
import { removegptsliceitem, setgptdata } from "../utils/gptslice";
import { Outlet } from "react-router-dom";

const Netflixmain = () => {
  const language = useSelector((store) => store?.configlang?.Lang);
  const dispatch =useDispatch();
  dispatch(setgptdata(false));
  dispatch(removegptsliceitem());
  usePopularmovies();
  useNowplayingmovies();
  useTopratedmovies();
  useUpcomingmovie();
  return (
    <div >
      <Header val={language} />
      <Maincontainer val={language} />
      <Secondarycontainer val={language} />
      <Outlet/>
    </div>
  );
};

export default Netflixmain;
