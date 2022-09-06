import { configureStore } from '@reduxjs/toolkit'
import barangReducer from "../features/barangSlice";
export default configureStore({
  reducer: {
    barang:barangReducer,
  },
})