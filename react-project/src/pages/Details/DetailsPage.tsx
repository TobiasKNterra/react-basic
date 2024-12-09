import { useNavigate, useParams } from "react-router-dom";
import { multipleBlogPosts } from "../../testdata/testData";
import BlogPostModel from "../../models/BlogPostModel";
import styles from "./DetailsPage.module.css";
import CustomThemeButton from "../../components/CustomThemeButton/CustomThemeButton";
import { useEffect, useState } from "react";

export default function DetailsPage() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<BlogPostModel | undefined>(
    undefined
  );

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3333/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setBlogPost(data));
  }, [id]);

  if (!blogPost) {
    return <div>Not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{blogPost.title}</h1>
      <h2>{blogPost.description}</h2>
      <p>{blogPost.content}</p>
      <CustomThemeButton
        type="secondary"
        text="Zurück zur Übersicht"
        onClick={() => navigate("/overview")}
      />
    </div>
  );
}
