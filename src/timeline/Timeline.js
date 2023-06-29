import React, { useState } from "react";
import Post from "./posts/Post";
import Suggestions from "./Suggestions/Suggestions";
import "./Timeline.css";
function Timeline() {
  const [posts] = useState([
    {
      user: "redian_",
      postImage:
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
      likes: 12,
      timespamp: "2d",
    },
    {
      user: "johndoe",
      postImage:
        "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
      likes: 23,
      timespamp: "1d",
    },
    {
      user: "johncea",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNHFobP4LrzZrkZmwiQJpBn7tcdUB_GwyEV4ZrKaLUgLvLWeRaS4_L1ZkfMwY8fC6WAE&usqp=CAU",
      likes: 231,
      timespamp: "1h",
    },
    {
      user: "johncea",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNHFobP4LrzZrkZmwiQJpBn7tcdUB_GwyEV4ZrKaLUgLvLWeRaS4_L1ZkfMwY8fC6WAE&usqp=CAU",
      likes: 231,
      timespamp: "1h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post post={post}></Post>
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions></Suggestions>
      </div>
    </div>
  );
}

export default Timeline;
