import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/item";

const ItemSlice=createSlice({
  name:"item",
  initialState:[],
  reducers:{
    addInitial:(store,action)=>{
     return action.payload;
    }
  }
})
export const ItemAction=ItemSlice.actions;
export default ItemSlice;

