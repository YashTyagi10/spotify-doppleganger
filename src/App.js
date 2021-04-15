import React, { useEffect, useState } from "react";
import "./App.css"
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "/Player.js";

const spotify = new SpotifyWebApi();    //To connect back and forth with the API

function App() {
  const [token, setToken] = useState(null);
  
  useEffect(() => {
    const token = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if(_token) {
      setToken(_token)

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("👱‍♂️", user);
      });
    }

    console.log("I HAVE A TOKEN 👉 ", token);
  }, []);

  return (
    <div className="app">{token ? <Player /> : <h1></h1>}</div>
  );
}

export default App;
