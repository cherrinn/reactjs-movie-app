export default (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return { ...state, watchlist: [action.payload, ...state.watchlist] };
    case "REMOVE_LIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
