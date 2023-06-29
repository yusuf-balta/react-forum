import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
function Suggestions() {
  return (
    <div className="suggesions">
      <div className="suggestions__title"> Suggestions for you</div>
      <div className="suggestions__usernames">
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
              <div className="username__info">
                <span className="username">Redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </span>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
              <div className="username__info">
                <span className="username">Redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </span>
          </div>
          <button className="follow__button">Follow</button>
        </div>
        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>R</Avatar>
              <div className="username__info">
                <span className="username">Redian</span>
                <span className="relation">New to instagram</span>
              </div>
            </span>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
