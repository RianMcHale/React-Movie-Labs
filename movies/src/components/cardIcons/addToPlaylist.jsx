import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";

const AddToPlaylistIcon = ({ movie }) => {
  return (
    <IconButton color="primary" aria-label="add to must watch list">
      <PlaylistAddIcon />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
