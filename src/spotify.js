export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";
const clientId =  "7dd6e5eb83dd43c7b58063383dafa0d8";

const scopes = [
    "user-read-currently-playing",
    "user-read-currently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modfy-playback-state",
];

export const getTokenFromUrl = 
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`;