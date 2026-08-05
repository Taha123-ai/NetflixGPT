import Header from "./Header";
import useNowplayingmovies from "../Hooks/useNowplayingmovies";
import Maincontainer from "./Maincontainer"
import Secondarycontainer from "./Secondarycontainer"

const Netflixmain = () => {
  useNowplayingmovies();
  return (
    <div className="">
      <Header />
      <Maincontainer/>
      <Secondarycontainer/>
    </div>
  );
};

export default Netflixmain;
