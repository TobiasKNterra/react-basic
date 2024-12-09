import { useNavigate } from "react-router-dom";
import BlogPost from "../../components/BlogPost/BlogPost";
import { multipleBlogPosts } from "../../testdata/testData";
import styles from "./OverviewPage.module.css";
import { useEffect, useState } from "react";
import BlogPostModel from "../../models/BlogPostModel";

export default function OverviewPage() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<BlogPostModel[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1>Unser Blog</h1>
      <div>
        {posts.map((blogPost) => (
          <BlogPost
            key={blogPost.id}
            blogpost={blogPost}
            onClick={() => navigate(`/overview/${blogPost.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
