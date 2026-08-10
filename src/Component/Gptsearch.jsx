import { useDispatch, useSelector } from "react-redux";
import Header from "./Header"
import Gptmain from "./Gptmain";
import { setgptdata } from "../utils/gptslice";
import { Outlet } from "react-router-dom";

const Gptsearch = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store?.configlang?.Lang);
  dispatch(setgptdata(true));
    
    return (
    <div>
    <Header val={language}/>
    <Gptmain />
    <Outlet />
    </div>
  )
}
export default Gptsearch;
