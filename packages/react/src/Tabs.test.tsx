import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("switches panel when tab is clicked", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    expect(screen.getByText("Panel One")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("tab", { name: "Two" }));
    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("supports keyboard navigation", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    fireEvent.keyDown(screen.getByRole("tab", { name: "One" }), { key: "ArrowRight" });
    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("supports vertical keyboard navigation with ArrowUp and ArrowDown", () => {
    render(
      <Tabs
        defaultValue="one"
        orientation="vertical"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div>, disabled: true },
          { key: "three", label: "Three", content: <div>Panel Three</div> }
        ]}
      />
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    fireEvent.keyDown(oneTab, { key: "ArrowDown" });
    expect(screen.getByText("Panel Three")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Three" })).toHaveFocus();

    fireEvent.keyDown(screen.getByRole("tab", { name: "Three" }), { key: "ArrowUp" });
    expect(screen.getByText("Panel One")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "One" })).toHaveFocus();
  });

  it("keeps tabpanel elements mounted so aria-controls always points to an existing panel", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    const twoTab = screen.getByRole("tab", { name: "Two" });

    const onePanelId = oneTab.getAttribute("aria-controls");
    const twoPanelId = twoTab.getAttribute("aria-controls");
    expect(onePanelId).toBeTruthy();
    expect(twoPanelId).toBeTruthy();

    const onePanel = document.getElementById(onePanelId!);
    const twoPanel = document.getElementById(twoPanelId!);
    expect(onePanel).not.toBeNull();
    expect(twoPanel).not.toBeNull();
    expect(onePanel).not.toHaveAttribute("hidden");
    expect(twoPanel).toHaveAttribute("hidden");

    fireEvent.click(twoTab);
    expect(onePanel).toHaveAttribute("hidden");
    expect(twoPanel).not.toHaveAttribute("hidden");
  });

  it("skips disabled tabs during keyboard navigation", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div>, disabled: true },
          { key: "three", label: "Three", content: <div>Panel Three</div> }
        ]}
      />
    );

    fireEvent.keyDown(screen.getByRole("tab", { name: "One" }), { key: "ArrowRight" });
    expect(screen.getByText("Panel Three")).toBeInTheDocument();
  });

  it("emits value change from controlled usage", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("tab", { name: "Two" }));
    expect(onValueChange).toHaveBeenCalledWith("two");
  });

  it("does not emit value change when selecting the already active tab", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("tab", { name: "One" }));
    expect(onValueChange).not.toHaveBeenCalled();
  });

  it("supports Home and End keyboard navigation while skipping disabled tabs", () => {
    render(
      <Tabs
        defaultValue="build"
        items={[
          { key: "spec", label: "Spec", content: <div>Panel Spec</div>, disabled: true },
          { key: "build", label: "Build", content: <div>Panel Build</div> },
          { key: "review", label: "Review", content: <div>Panel Review</div>, disabled: true },
          { key: "release", label: "Release", content: <div>Panel Release</div> }
        ]}
      />
    );

    const buildTab = screen.getByRole("tab", { name: "Build" });
    fireEvent.keyDown(buildTab, { key: "End" });
    expect(screen.getByText("Panel Release")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Release" })).toHaveFocus();

    const releaseTab = screen.getByRole("tab", { name: "Release" });
    fireEvent.keyDown(releaseTab, { key: "Home" });
    expect(screen.getByText("Panel Build")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Build" })).toHaveFocus();
  });

  it("supports manual activation mode with Enter", () => {
    render(
      <Tabs
        defaultValue="one"
        activationMode="manual"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> },
          { key: "three", label: "Three", content: <div>Panel Three</div> }
        ]}
      />
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    fireEvent.keyDown(oneTab, { key: "ArrowRight" });

    expect(screen.getByRole("tab", { name: "Two" })).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("tab", { name: "Two" }), { key: "Enter" });
    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("supports manual activation mode with Space", () => {
    render(
      <Tabs
        defaultValue="one"
        activationMode="manual"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    fireEvent.keyDown(screen.getByRole("tab", { name: "One" }), { key: "ArrowRight" });
    fireEvent.keyDown(screen.getByRole("tab", { name: "Two" }), { key: " " });

    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("supports tablist naming through aria-labelledby", () => {
    render(
      <div>
        <h2 id="release-stages">Release stages</h2>
        <Tabs
          ariaLabelledBy="release-stages"
          items={[
            { key: "one", label: "One", content: <div>Panel One</div> },
            { key: "two", label: "Two", content: <div>Panel Two</div> }
          ]}
        />
      </div>
    );

    const tablist = screen.getByRole("tablist", { name: "Release stages" });
    expect(tablist).toHaveAttribute("aria-labelledby", "release-stages");
    expect(tablist).not.toHaveAttribute("aria-label");
  });
});
