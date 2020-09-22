// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// This this sending the authorization to spotify to handle it
export const authEndpoint = "https://accounts.spotify.com/authorize";

// As soon as spotify authorize the user and it send it back to the above url which we gave.
const redirectUri = "https://spotify-clone-337f2.web.app/";

const clientId = "922acee6d993422f9707444eea1359b0";

// SCOPES
// What they actually mean with the help of this we can access the user playlist and everything
// As a limitation user cannot delete stuff using spotify API

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // accessToken = mysupersceretkey&name=sachinblahblahblah&
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// So this is what we are creating a whole url once the user is logged in or just to send him as he do the login
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
