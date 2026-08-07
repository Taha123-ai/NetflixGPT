import { createSlice } from "@reduxjs/toolkit";

const configlang = createSlice({
    name:"language",
    initialState:{
        Lang:"en"
    },
    reducers:{
        addlang:(state,action)=>{
            state.Lang=action.payload;
        }
    }
})
export default configlang.reducer;
export const {addlang} =configlang.actions;