import { createSlice } from "@reduxjs/toolkit";

const movieslice=createSlice({
    name:"movie",
    initialState:{
        Nowplayingmovie:null,
        Trailer:null,
        toprated:null,
        upcoming:null,
        popular:null
    },
    reducers:{
        addmovies:(state,action)=>{
            state.Nowplayingmovie=action.payload;
        },
        addtrailer:(state,action)=>{
            state.Trailer=action.payload;
        },
        addtoprated:(state,action)=>{
            state.toprated=action.payload;
        },
        addupcoming:(state,action)=>{
            state.upcoming=action.payload;
        },
        addpopular:(state,action)=>{
            state.popular=action.payload;
        },
        removedata:(state)=>{
            state.Nowplayingmovie=null,
            state.Trailer=null,
            state.toprated=null,
            state.upcoming=null,
            state.popular=null    
        }
    }
})
export default movieslice.reducer;
export const {addmovies,addtrailer,addtoprated,addupcoming,addpopular,removedata} =movieslice.actions;