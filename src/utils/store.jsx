import { configureStore } from "@reduxjs/toolkit";
import  userreducer  from "./userslice"
import moviesreducer from "./nowplayingmovieslice"
const store= configureStore({
    reducer:{
        user:userreducer,
        movies:moviesreducer,
    }
})
export default store;