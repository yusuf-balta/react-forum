import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
function Sidenav() {
  return (
    <div className="sidenav">
      <img
        alt=""
        className="sidenav__logo"
        src="https://cdn-icons-png.flaticon.com/512/3621/3621464.png"
      />
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon></HomeIcon>
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon></SearchIcon>
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon></ExploreIcon>
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon></SlideshowIcon>
          <span>SlideShow</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon></ChatIcon>
          <span>Chat</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon></FavoriteBorderIcon>
          <span>Favorite</span>
        </button>

        <button className="sidenav__button">
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
          <span>Add</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon></MenuIcon>
          <span>Menu</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
