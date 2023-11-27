import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
      <Header blogName="Your Blog Name" />
      <About
        image="https://via.placeholder.com/215"
        aboutText="About your blog..."
      />
      <ArticleList posts={[]} />
    </div>
  );
}

export default App;
