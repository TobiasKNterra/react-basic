import { vi, describe, expect, it } from "vitest";
import BlogPost from "./BlogPost";
import BlogPostModel from "../../models/BlogPostModel";
import { render, screen, fireEvent } from "@testing-library/react";

const blogPost: BlogPostModel = {
  id: "1",
  title: "Title",
  content: "Content",
  description: "Description",
  ts: "2021-01-01",
};

describe("Blogpost", () => {
  it("Renders the BlogPost", async () => {
    render(<BlogPost onClick={() => {}} blogpost={blogPost} />);

    const button = await screen.findByText("Weiterlesen");

    screen.getByText("Title");
    screen.getByText("Content");
    screen.getByText("Description");
    screen.getByText("2021-01-01");

    expect(button.className.includes("primary")).equal(true);
  });

  it("OnClick BlogPost", async () => {
    const onClick = vi.fn();

    render(<BlogPost onClick={onClick} blogpost={blogPost} />);

    const button = await screen.findByText("Weiterlesen");
    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
});
