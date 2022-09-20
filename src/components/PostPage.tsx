//contains blogposts

import { useState } from "react";
import BlogPostEntry from "../models/BlogPostEntry";
import BlogPost from "./BlogPost";
import "./PostPage.css";

const PostPage = () => {
  const currentDate = new Date();
  const [entries, setEntries] = useState<BlogPostEntry[]>([
    { title: "Test", date: `Posted on ${currentDate}`, content: "Test" },
  ]);

  return (
    <div className="PostPage">
      <ul className="feed">
        {entries.map((entry, index) => (
          <BlogPost entry={entry} />
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
