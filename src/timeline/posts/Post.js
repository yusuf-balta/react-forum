import {
  BookmarkOutlined,
  ChatOutlined,
  FavoriteBorderOutlined,
  MoreHorizOutlined,
  Telegram,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__author">
          <Avatar>{post.user.charAt(0).toUpperCase()}</Avatar>
          <div className="post__header__username">{post.user}.</div>
          <span>{post.timespamp}</span>
        </div>

        <MoreHorizOutlined></MoreHorizOutlined>
      </div>
      <div className="post__image">
        <img alt="" src={post.postImage}></img>
      </div>
      <div className="post__footer">
        <div className="post__footer__icons">
          <div className="post__icons__main">
            <div className="post__icon">
              <FavoriteBorderOutlined></FavoriteBorderOutlined>
            </div>
            <div className="post__icon">
              <ChatOutlined></ChatOutlined>
            </div>
            <div className="post__icon">
              <Telegram></Telegram>
            </div>
          </div>
          <div className="post__icons__save">
            <div className="post__icon">
              <BookmarkOutlined></BookmarkOutlined>
            </div>
          </div>
        </div>
        Liked by {post.likes} people.
      </div>
    </div>
  );
}
