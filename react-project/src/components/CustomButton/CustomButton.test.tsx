import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CustomButton from "./CustomButton";

describe("CustomButton", () => {
  it("Renders CustomButton", async () => {
    render(<CustomButton onClick={() => {}} buttonText="Custom Button" />);

    await screen.findByText("Custom Button");
  });

  it("OnClick CustomButton", async () => {
    const onClick = vi.fn();

    render(<CustomButton onClick={onClick} buttonText="Custom Button" />);

    const button = await screen.findByText("Custom Button");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
