import types from "./types";

export default {
  [types.ADD_COUNT]: (state, value) => {
    state.count += value;
  },
  [types.REDUCT_COUNT]: (state, value) => {
    state.count -= value;
  }
};
