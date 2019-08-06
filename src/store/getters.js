export default {
  countToCn: state => {
    let countExist = window.sessionStorage.getItem("count");
    if (!state.count) {
      return JSON.parse(countExist) || 0;
    } else {
      return state.count;
    }
  }
};
