const INITIAL_STATE = {
  products: [],
  favorites: [],
  cart: []
};

function reducer(state = INITIAL_STATE, { type, payLoad }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payLoad };
    case "ADD_TO_CART":
      const itemIndex = state.cart.findIndex(({ id }) => id === payLoad.id);

      if (itemIndex > -1) {
        return {
          ...state,
          cart: state.cart.map((item, i) => (i == itemIndex ? payLoad : item))
        };
      }

      return { ...state, cart: [...state.cart, payLoad] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(({ id }) => id !== payLoad) };
    case "TOGGLE_FAVORITE":
      if (state.favorites.includes(payLoad)) {
        return {
          ...state,
          favorites: state.favorites.filter(id => id !== payLoad)
        };
      }

      return { ...state, favorites: [...state.favorites, payLoad] };
    default:
      return state;
  }
}

export default reducer;
