// App.js
import React, { useState, useEffect } from "react";
import PostLists from "./Components/PostLists";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListItem from "./Components/ListItem";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
 
      });
  }, []);

  return (
    <div className="App">
      <PostLists postList={posts} />
    </div>
  );
};

export default App;
