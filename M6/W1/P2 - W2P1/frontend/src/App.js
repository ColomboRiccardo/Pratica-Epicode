import React from "react";
import NavBar from "./components/navbar/BlogNavbar";
import Home from "./views/home/Home";
import Blog from "./views/blog/Blog";
import NewBlogPost from "./views/new/New";
import AuthorList from "./components/authors/AuthorList";
import AuthorCard from "./components/authors/AuthorCard";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/new" element={<NewBlogPost />} />
        <Route path="/authors" element={<AuthorList />} />
        <Route
          path="/authors/:id"
          element={<AuthorCard />}
        />
      </Routes>
    </Router>
  );
}

export default App;
