import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movie",
    initialState:{
        Nowplayingmovie:null,
        Trailer:null,
    },
    reducers:{
        addmovies:(state,action)=>{
            state.Nowplayingmovie=action.payload;
        },
        addtrailer:(state,action)=>{
            state.Trailer=action.payload;
        }
    }
})
export default movieslice.reducer;
export const {addmovies,addtrailer} =movieslice.actions;