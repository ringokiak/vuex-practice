import types from "./types";

export default {
  add_count: (context, value) => {
    context.commit(types.ADD_COUNT, value);
  },
  reduct_count: (context, value) => {
    context.commit(types.REDUCT_COUNT, value);
  }
};
