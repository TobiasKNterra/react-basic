import BlogPostModel from "../../models/BlogPostModel";
import CustomThemeButton from "../CustomThemeButton/CustomThemeButton";
import styles from "./BlogPost.module.css";

interface BlogPostProps {
  model: BlogPostModel;
  onClick: () => void;
}

export default function BlogPost(props: BlogPostProps) {
  return <div className={styles.blogpost}>
    <h1>{props.model.title}</h1>
    <div>{props.model.description}</div>
    <p>{props.model.content}</p>
    <span>
      <span>{props.model.ts}</span>
      <CustomThemeButton onClick={props.onClick} text={"Weiterlesen"} type={"primary"}/>
    </span>
  </div>
}
