//individual blog posts

import BlogPostEntry from "../models/BlogPostEntry";
import "./BlogPost.css";

interface Props {
  entry: BlogPostEntry;
}

const BlogPost = ({ entry }: Props) => {
  return (
    <li className="BlogPost">
      <div className="whole-post">
        <h3 className="post-title">{entry.title}</h3>
        <p className="post-date">{entry.date}</p>
        <p className="post-content">{entry.content}</p>
      </div>
    </li>
  );
};

export default BlogPost;
