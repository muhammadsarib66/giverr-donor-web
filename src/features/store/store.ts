import { configureStore } from "@reduxjs/toolkit";
import Slicer from "../slicer/Slicer";
import countriesSlice from '../slicer/GetCountriesSlice'

export const store = configureStore({
  reducer: {
    countriesSlice,
    Slicer,
  },
});
