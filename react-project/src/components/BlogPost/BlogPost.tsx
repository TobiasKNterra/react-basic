import BlogPostModel from "../../models/BlogPostModel";
import CustomThemeButton from "../CustomThemeButton/CustomThemeButton";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  blogpost: BlogPostModel;
  onClick: () => void;
}

export default function BlogPost(props: BlogPostProps) {
  return (
    <div className={styles.blogpost}>
      <h1>{props.blogpost.title}</h1>
      <div>{props.blogpost.description}</div>
      <p>{props.blogpost.content}</p>
      <span>
        <span>{props.blogpost.ts}</span>
        <CustomThemeButton
          type="primary"
          text="Weiterlesen"
          onClick={props.onClick}
        />
      </span>
    </div>
  );
}
