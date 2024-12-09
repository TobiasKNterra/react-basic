import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, expect, it } from "vitest";
import CustomThemeButton from "./CustomThemeButton";

describe("CustomThemeButton", () => {
  it("Renders the primary CustomThemeButton", async () => {
    render(
        <CustomThemeButton
            type="primary"
            onClick={() => {}}
            text="Custom Theme Button"
        />
    );

    const button = await screen.findByText("Custom Theme Button");
    expect(button.className.includes("primary")).equal(true);
  });

  it("OnClick on CustomThemeButton", async () => {
    const onClick = vi.fn();

    render(
        <CustomThemeButton
            type="secondary"
            onClick={onClick}
            text="Custom Theme Button"
        />
    );

    const button = await screen.findByText("Custom Theme Button");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
    expect(button.className.includes("secondary")).equal(true);
  });
});