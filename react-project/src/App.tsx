import "./App.css";
import "./styles/Colors.css";
import BlogPost from "./components/BlogPost/BlogPost";
import {multipleBlogPosts} from "./testdata/testData";
import BlogPostModel from "./models/BlogPostModel";

function App() {
  return (
    <div className="container-grid">
      {multipleBlogPosts.map((blogPost: BlogPostModel) =>
          <BlogPost key={blogPost.id} model={blogPost} onClick={() => console.log(blogPost.id)}/>)}
    </div>
  );
}

export default App;
