import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./index.scss";

const MusicSearch = () => {
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();

  const search = () => {
    console.log("Title:", title);
    console.log("Artist:", artist);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeArtist = (e) => {
    setArtist(e.target.value);
  };

  return (
    <div className="MusicSearch">
      <div className="TitleInput">
        <TextField
          id="title-input"
          label="Title"
          variant="outlined"
          onChange={handleChangeTitle}
        />
      </div>
      <div className="ArtistInput">
        <TextField
          id="artist-input"
          label="Artist"
          variant="outlined"
          onChange={handleChangeArtist}
        />
      </div>
      <div className="InputButton">
        <Button variant="contained" onClick={search}>
          Submit
        </Button>
      </div>
    </div>
  );
};
export default MusicSearch;
