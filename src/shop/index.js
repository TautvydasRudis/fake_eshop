const INITIAL_STATE = {
  products: []
};

function reducer(state = INITIAL_STATE, { type, payLoad }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payLoad };
    default:
      return state;
  }
}

export default reducer;
