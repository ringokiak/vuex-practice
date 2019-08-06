import types from "./types";

export default {
  [types.ADD_COUNT]: (state, value) => {
    state.count = JSON.parse(window.sessionStorage.getItem('count')) + value;
    window.sessionStorage.setItem("count", state.count);
  },
  [types.REDUCT_COUNT]: (state, value) => {
    state.count = JSON.parse(window.sessionStorage.getItem('count')) - value;
    window.sessionStorage.setItem("count", state.count);
  }
};
