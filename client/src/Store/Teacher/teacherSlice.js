import { createSlice } from "@reduxjs/toolkit";

const teacherInitialState = {
  catQuestioName: "",
  categories: [],
  ans: [],
};

const teacherSlice = createSlice({
  name: "teacher",
  initialState: teacherInitialState,
  reducers: {
    categoriesAction(state, actions) {
      const array = actions.payload;
      state.categories = array;
      // console.log("fromRTK", array);
    },
    editCategories(state, actions) {
      const array = actions.payload;
      state.categories = array;
    },
    deleteState(state, actions) {
      state.categories.splice(actions.payload, 1);
    },

    anwerSave(state, actions) {
      const newAnswer = actions.payload;
      state.ans.push(newAnswer);
    },
    anwerDelete(state, actions) {
      state.ans.splice(actions.payload, 1);
    },
  },
});

export const teacherActions = teacherSlice.actions;
export default teacherSlice;
