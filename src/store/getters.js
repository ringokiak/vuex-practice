export default {
  countToCn: state => {
    if (state.count < 0) {
      return Math.abs(state.count);
    } else if (state.count === 0) {
      return 0;
    } else {
      return state.count - 2 * state.count;
    }
  }
};
