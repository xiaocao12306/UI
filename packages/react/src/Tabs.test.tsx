import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("keeps focus and selection at boundaries when loop is disabled", () => {
    render(
      <Tabs
        defaultValue="one"
        loop={false}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> },
          { key: "three", label: "Three", content: <div>Panel Three</div> }
        ]}
      />
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    const threeTab = screen.getByRole("tab", { name: "Three" });

    fireEvent.click(threeTab);
    fireEvent.keyDown(threeTab, { key: "ArrowRight" });
    expect(threeTab).toHaveFocus();
    expect(screen.getByText("Panel Three")).toBeInTheDocument();

    fireEvent.click(oneTab);
    fireEvent.keyDown(oneTab, { key: "ArrowLeft" });
    expect(oneTab).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();
  });

  it("uses RTL arrow semantics for horizontal keyboard navigation", () => {
    render(
      <div dir="rtl">
        <Tabs
          defaultValue="one"
          items={[
            { key: "one", label: "One", content: <div>Panel One</div> },
            { key: "two", label: "Two", content: <div>Panel Two</div> },
            { key: "three", label: "Three", content: <div>Panel Three</div> }
          ]}
        />
      </div>
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    fireEvent.keyDown(oneTab, { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Three" })).toHaveFocus();
    expect(screen.getByText("Panel Three")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("tab", { name: "Three" }), { key: "ArrowLeft" });
    expect(screen.getByRole("tab", { name: "One" })).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();
  });

  it("falls back to computed style direction when no dir attribute is present", () => {
    const originalGetComputedStyle = window.getComputedStyle;
    const getComputedStyleSpy = vi.spyOn(window, "getComputedStyle").mockImplementation((element, pseudoElt) => {
      const style = originalGetComputedStyle.call(window, element, pseudoElt);
      return new Proxy(style, {
        get(target, property, receiver) {
          if (property === "direction") {
            return "rtl";
          }
          return Reflect.get(target, property, receiver);
        }
      }) as CSSStyleDeclaration;
    });

    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> },
          { key: "three", label: "Three", content: <div>Panel Three</div> }
        ]}
      />
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    fireEvent.keyDown(oneTab, { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: "Three" })).toHaveFocus();
    expect(screen.getByText("Panel Three")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("tab", { name: "Three" }), { key: "ArrowLeft" });
    expect(screen.getByRole("tab", { name: "One" })).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();

    getComputedStyleSpy.mockRestore();
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

  it("ignores ArrowUp and ArrowDown in horizontal orientation", async () => {
    const user = userEvent.setup();
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
    await user.tab();
    expect(oneTab).toHaveFocus();
    await user.keyboard("{ArrowDown}");
    expect(oneTab).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();

    await user.keyboard("{ArrowUp}");
    expect(oneTab).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();
  });

  it("ignores ArrowLeft and ArrowRight in vertical orientation", async () => {
    const user = userEvent.setup();
    render(
      <Tabs
        defaultValue="one"
        orientation="vertical"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    await user.tab();
    expect(oneTab).toHaveFocus();
    await user.keyboard("{ArrowRight}");
    expect(oneTab).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();

    await user.keyboard("{ArrowLeft}");
    expect(oneTab).toHaveFocus();
    expect(screen.getByText("Panel One")).toBeInTheDocument();
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
    expect(onePanel).toHaveAttribute("tabindex", "0");
    expect(twoPanel).toHaveAttribute("hidden");
    expect(twoPanel).toHaveAttribute("tabindex", "-1");

    fireEvent.click(twoTab);
    expect(onePanel).toHaveAttribute("hidden");
    expect(onePanel).toHaveAttribute("tabindex", "-1");
    expect(twoPanel).not.toHaveAttribute("hidden");
    expect(twoPanel).toHaveAttribute("tabindex", "0");
  });

  it("keeps tab and panel id wiring stable when keys contain special characters", () => {
    render(
      <Tabs
        defaultValue="Roadmap / 2026"
        items={[
          { key: "Roadmap / 2026", label: "Roadmap", content: <div>Roadmap panel</div> },
          { key: "验收项 #1", label: "验收项", content: <div>验收 panel</div> }
        ]}
      />
    );

    const roadmapTab = screen.getByRole("tab", { name: "Roadmap" });
    const acceptanceTab = screen.getByRole("tab", { name: "验收项" });
    expect(roadmapTab.id).toMatch(/-tab-\d+$/);
    expect(acceptanceTab.id).toMatch(/-tab-\d+$/);

    const roadmapPanel = document.getElementById(roadmapTab.getAttribute("aria-controls") ?? "");
    const acceptancePanel = document.getElementById(
      acceptanceTab.getAttribute("aria-controls") ?? ""
    );
    expect(roadmapPanel).not.toBeNull();
    expect(acceptancePanel).not.toBeNull();
    expect(roadmapPanel).toHaveAttribute("aria-labelledby", roadmapTab.id);
    expect(acceptancePanel).toHaveAttribute("aria-labelledby", acceptanceTab.id);
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

  it("falls back to first enabled tab when controlled value is invalid or disabled", () => {
    const items = [
      { key: "one", label: "One", content: <div>Panel One</div> },
      { key: "two", label: "Two", content: <div>Panel Two</div>, disabled: true },
      { key: "three", label: "Three", content: <div>Panel Three</div> }
    ];

    const { rerender } = render(<Tabs value="unknown" items={items} />);
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Panel One")).toBeInTheDocument();

    rerender(<Tabs value="two" items={items} />);
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Panel One")).toBeInTheDocument();
  });

  it("falls back to first enabled tab when active tab becomes disabled after rerender", () => {
    const baseItems = [
      { key: "one", label: "One", content: <div>Panel One</div> },
      { key: "two", label: "Two", content: <div>Panel Two</div> }
    ];

    const { rerender } = render(<Tabs defaultValue="one" items={baseItems} />);
    fireEvent.click(screen.getByRole("tab", { name: "Two" }));
    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Panel Two")).toBeInTheDocument();

    rerender(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div>, disabled: true }
        ]}
      />
    );

    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Panel One")).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Two" })).toBeDisabled();
  });

  it("marks tablist disabled when no enabled tabs are available", () => {
    render(
      <Tabs
        activationMode="manual"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div>, disabled: true },
          { key: "two", label: "Two", content: <div>Panel Two</div>, disabled: true }
        ]}
      />
    );

    const tabList = screen.getByRole("tablist", { name: "Tabs" });
    expect(tabList).toHaveAttribute("aria-disabled", "true");

    const allTabs = screen.getAllByRole("tab");
    expect(allTabs).toHaveLength(2);
    allTabs.forEach((tab) => {
      expect(tab).toBeDisabled();
      expect(tab).not.toHaveAttribute("aria-keyshortcuts");
      expect(tab).toHaveAttribute("tabindex", "-1");
      expect(tab).toHaveAttribute("aria-selected", "false");
    });
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

  it("avoids duplicate onValueChange in manual mode when keyboard activation also emits click", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        activationMode="manual"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.keyDown(twoTab, { key: "Enter" });
    fireEvent.click(twoTab, { detail: 0 });

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith("two");
  });

  it("ignores repeated Enter keydown in manual mode activation", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        activationMode="manual"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.keyDown(twoTab, { key: "Enter", repeat: false });
    fireEvent.keyDown(twoTab, { key: "Enter", repeat: true });

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith("two");
  });

  it("ignores repeated Space keydown in manual mode activation", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        activationMode="manual"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.keyDown(twoTab, { key: " ", repeat: false });
    fireEvent.keyDown(twoTab, { key: " ", repeat: true });

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith("two");
  });

  it("ignores manual activation keys during IME composition", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        activationMode="manual"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.keyDown(twoTab, { key: "Enter", isComposing: true, keyCode: 229, which: 229 });
    fireEvent.keyDown(twoTab, { key: " ", isComposing: true, keyCode: 229, which: 229 });
    expect(onValueChange).not.toHaveBeenCalled();

    fireEvent.keyDown(twoTab, { key: "Enter" });
    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith("two");
  });

  it("allows manual mode detail=0 click activation when not preceded by keyboard activation", () => {
    const onValueChange = vi.fn();
    render(
      <Tabs
        value="one"
        activationMode="manual"
        onValueChange={onValueChange}
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    fireEvent.click(screen.getByRole("tab", { name: "Two" }), { detail: 0 });

    expect(onValueChange).toHaveBeenCalledTimes(1);
    expect(onValueChange).toHaveBeenCalledWith("two");
  });

  it("expires keyboard dedupe latch so later detail=0 activation still works", () => {
    vi.useFakeTimers();
    const onValueChange = vi.fn();

    try {
      render(
        <Tabs
          value="one"
          activationMode="manual"
          onValueChange={onValueChange}
          items={[
            { key: "one", label: "One", content: <div>Panel One</div> },
            { key: "two", label: "Two", content: <div>Panel Two</div> }
          ]}
        />
      );

      const twoTab = screen.getByRole("tab", { name: "Two" });
      fireEvent.keyDown(twoTab, { key: "Enter" });
      expect(onValueChange).toHaveBeenCalledTimes(1);

      act(() => {
        vi.advanceTimersByTime(0);
      });

      fireEvent.click(twoTab, { detail: 0 });
      expect(onValueChange).toHaveBeenCalledTimes(2);
      expect(onValueChange).toHaveBeenNthCalledWith(2, "two");
    } finally {
      vi.useRealTimers();
    }
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

  it("ignores modified navigation and activation keys", () => {
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
    fireEvent.keyDown(oneTab, { key: "ArrowRight", ctrlKey: true });
    expect(oneTab).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(oneTab, { key: "End", metaKey: true });
    expect(oneTab).toHaveAttribute("aria-selected", "true");

    fireEvent.keyDown(oneTab, { key: "Enter", altKey: true });
    expect(oneTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Panel One")).toBeInTheDocument();
  });

  it("resets manual roving focus target back to selected tab after leaving tablist", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Tabs
          defaultValue="one"
          activationMode="manual"
          items={[
            { key: "one", label: "One", content: <div>Panel One</div> },
            { key: "two", label: "Two", content: <div>Panel Two</div> }
          ]}
        />
        <button type="button">Outside</button>
      </>
    );

    const oneTab = screen.getByRole("tab", { name: "One" });
    const twoTab = screen.getByRole("tab", { name: "Two" });
    await user.tab();
    await user.keyboard("{ArrowRight}");
    expect(twoTab).toHaveFocus();
    expect(oneTab).toHaveAttribute("aria-selected", "true");
    expect(twoTab).toHaveAttribute("aria-selected", "false");
    expect(oneTab).toHaveAttribute("tabindex", "-1");
    expect(twoTab).toHaveAttribute("tabindex", "0");

    const outsideButton = screen.getByRole("button", { name: "Outside" });
    act(() => {
      outsideButton.focus();
    });
    expect(outsideButton).toHaveFocus();
    await waitFor(() => {
      expect(oneTab).toHaveAttribute("tabindex", "0");
      expect(twoTab).toHaveAttribute("tabindex", "-1");
    });
  });

  it("exposes Enter/Space keyboard shortcuts metadata in manual activation mode", () => {
    render(
      <Tabs
        defaultValue="one"
        activationMode="manual"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> },
          { key: "three", label: "Three", content: <div>Panel Three</div>, disabled: true }
        ]}
      />
    );

    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute(
      "aria-keyshortcuts",
      "Enter Space"
    );
    expect(screen.getByRole("tab", { name: "Three" })).not.toHaveAttribute("aria-keyshortcuts");
  });

  it("does not expose manual-only keyboard shortcut metadata in automatic mode", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    expect(screen.getByRole("tab", { name: "One" })).not.toHaveAttribute("aria-keyshortcuts");
    expect(screen.getByRole("tab", { name: "Two" })).not.toHaveAttribute("aria-keyshortcuts");
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

  it("supports manual activation mode with modern Space key value", () => {
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
    fireEvent.keyDown(screen.getByRole("tab", { name: "Two" }), { key: "Space" });

    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("keeps vertical manual mode panel stable until explicit activation", () => {
    render(
      <Tabs
        defaultValue="backlog"
        orientation="vertical"
        activationMode="manual"
        items={[
          { key: "backlog", label: "Backlog", content: <div>Panel Backlog</div> },
          { key: "review", label: "Review", content: <div>Panel Review</div>, disabled: true },
          { key: "ship", label: "Ship", content: <div>Panel Ship</div> }
        ]}
      />
    );

    const backlogTab = screen.getByRole("tab", { name: "Backlog" });
    const shipTab = screen.getByRole("tab", { name: "Ship" });
    fireEvent.keyDown(backlogTab, { key: "ArrowDown" });

    const shipPanel = document.getElementById(shipTab.getAttribute("aria-controls")!);
    expect(shipPanel).not.toBeNull();
    expect(shipTab).toHaveFocus();
    expect(screen.getByText("Panel Backlog")).toBeInTheDocument();
    expect(shipPanel).toHaveAttribute("hidden");

    fireEvent.keyDown(shipTab, { key: "Enter" });
    expect(screen.getByText("Panel Ship")).toBeInTheDocument();
  });

  it("supports manual activation mode with legacy Spacebar key value", () => {
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
    fireEvent.keyDown(screen.getByRole("tab", { name: "Two" }), { key: "Spacebar" });

    expect(screen.getByText("Panel Two")).toBeInTheDocument();
  });

  it("keeps manual mode panel stable on Home/End until explicit activation", () => {
    render(
      <Tabs
        defaultValue="build"
        activationMode="manual"
        items={[
          { key: "spec", label: "Spec", content: <div>Panel Spec</div> },
          { key: "build", label: "Build", content: <div>Panel Build</div> },
          { key: "release", label: "Release", content: <div>Panel Release</div> }
        ]}
      />
    );

    const buildTab = screen.getByRole("tab", { name: "Build" });
    fireEvent.keyDown(buildTab, { key: "End" });
    expect(screen.getByRole("tab", { name: "Release" })).toHaveFocus();
    expect(screen.getByText("Panel Build")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("tab", { name: "Release" }), { key: "Home" });
    expect(screen.getByRole("tab", { name: "Spec" })).toHaveFocus();
    expect(screen.getByText("Panel Build")).toBeInTheDocument();

    fireEvent.keyDown(screen.getByRole("tab", { name: "Spec" }), { key: " " });
    expect(screen.getByText("Panel Spec")).toBeInTheDocument();
  });

  it("shows focus ring for Tab navigation even after pointer interaction fallback path", () => {
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
    const matchesSpy = vi.spyOn(oneTab, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.mouseDown(oneTab);
    fireEvent.focus(oneTab);
    expect(oneTab.style.boxShadow).toBe("none");

    fireEvent.blur(oneTab);
    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(oneTab);
    expect(oneTab.style.boxShadow).toContain("0 0 0 3px");

    matchesSpy.mockRestore();
  });

  it("applies pressed offset only while pointer is active", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.mouseDown(twoTab);
    expect(twoTab.style.transform).toBe("translateY(1px)");

    fireEvent.mouseUp(twoTab);
    expect(twoTab.style.transform).toBe("translateY(0)");
  });

  it("ignores non-primary pointer buttons for pressed offset lifecycle", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.mouseDown(twoTab, { button: 2 });
    expect(twoTab.style.transform).toBe("translateY(0)");

    fireEvent.mouseDown(twoTab, { button: 0 });
    expect(twoTab.style.transform).toBe("translateY(1px)");

    fireEvent.mouseUp(twoTab, { button: 2 });
    expect(twoTab.style.transform).toBe("translateY(1px)");

    fireEvent.mouseUp(twoTab, { button: 0 });
    expect(twoTab.style.transform).toBe("translateY(0)");
  });

  it("keeps focus-visible ring on non-primary pointer down and clears only for primary pointer", () => {
    render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    const matchesSpy = vi.spyOn(twoTab, "matches").mockImplementation(() => {
      throw new Error("focus-visible is not supported in this environment");
    });

    fireEvent.keyDown(document, { key: "Tab" });
    fireEvent.focus(twoTab);
    expect(twoTab.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.mouseDown(twoTab, { button: 2 });
    expect(twoTab.style.boxShadow).toContain("0 0 0 3px");

    fireEvent.mouseDown(twoTab, { button: 0 });
    expect(twoTab.style.boxShadow).toBe("none");

    matchesSpy.mockRestore();
  });

  it("resets pressed and focus visual states when interacted tab becomes disabled", () => {
    const { rerender } = render(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div> }
        ]}
      />
    );

    const twoTab = screen.getByRole("tab", { name: "Two" });
    fireEvent.mouseDown(twoTab);
    expect(twoTab.style.transform).toBe("translateY(1px)");

    rerender(
      <Tabs
        defaultValue="one"
        items={[
          { key: "one", label: "One", content: <div>Panel One</div> },
          { key: "two", label: "Two", content: <div>Panel Two</div>, disabled: true }
        ]}
      />
    );

    const disabledTwoTab = screen.getByRole("tab", { name: "Two" });
    expect(disabledTwoTab).toBeDisabled();
    expect(disabledTwoTab.style.transform).toBe("translateY(0)");
    expect(disabledTwoTab.style.boxShadow).toBe("none");
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
