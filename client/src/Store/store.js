import { configureStore } from "@reduxjs/toolkit";
import teacherSlice from "./Teacher/teacherSlice";

const store = configureStore({
  reducer: { teacher: teacherSlice.reducer },
});

export default store;
