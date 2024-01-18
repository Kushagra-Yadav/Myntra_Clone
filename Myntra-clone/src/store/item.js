import { configureStore, createSlice } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import FetchStatusSlice from "./FetchSlice";
import BagSlice from "./BagSlice";


const ItemStore=configureStore({
  reducer:{
    item:ItemSlice.reducer,
    fetchStatus:FetchStatusSlice.reducer,
    bag:BagSlice.reducer
  }
})
export default ItemStore;