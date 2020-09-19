export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished devloping
  // token:
  //   "BQDHDYiHH5WV3_oZj6WB0Yr8PYcSYTb3S15h5xAbeajMJoyWEWPoxieE6V-p5FNLmiVDwterS6VpBA20nAr2E2b4esR1OfX08uQti4UNRyaOmreCkGj1cbWK1TZiMJYuQtwhwqbCfLPLKbByBt8QaYEV6OkPed6MDppp1EgppZsaFi31",
};

const reducer = (state, action) => {
  console.log(action);

  // Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
