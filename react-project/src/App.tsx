import "./App.css";
import "./styles/Colors.css";

import reactSVG from "./assets/react.svg";
import CustomButton from "./components/CustomButton/CustomButton";
import { useState } from "react";
import CustomThemeButton from "./components/CustomThemeButton/CustomThemeButton";
import BlogPost from "./components/BlogPost/BlogPost";
import { multipleBlogPosts, singleBlogPost } from "./testdata/testData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OverviewPage from "./pages/Overview/OverviewPage";
import DetailsPage from "./pages/Details/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/overview/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
