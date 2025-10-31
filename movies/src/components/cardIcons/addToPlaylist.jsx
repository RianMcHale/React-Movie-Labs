import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";

const AddToPlaylistIcon = ({ movie }) => {
  return (
    <IconButton
      aria-label="Add to must watch list"
      color="primary"
    >
      <PlaylistAddIcon />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
