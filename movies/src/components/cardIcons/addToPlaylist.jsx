import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = () => {
    context.addToMustWatch(movie);
  };

  return (
    <IconButton
      aria-label="Add to must watch"
      color="primary"
      onClick={handleAddToMustWatch}
    >
      <PlaylistAddIcon />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
