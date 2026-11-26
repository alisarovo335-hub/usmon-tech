import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { GalleryItem } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";

const mockItem: GalleryItem = {
  id: "gallery-test",
  categoryId: "ecommerce",
  title: "Test Gallery Item",
  description: "Test description for lightbox.",
  kind: "live-demo",
  image: "/projects/arzon-bozor-cover.jpg",
  imageAlt: "Test preview",
  published: true,
};

describe("GalleryLightbox focus restoration", () => {
  afterEach(() => {
    cleanup();
    document.body.style.overflow = "";
  });
  it("restores focus to the trigger when Close is clicked", () => {
    const onClose = vi.fn();
    const trigger = document.createElement("button");
    trigger.setAttribute("aria-label", "Gallery card trigger");
    document.body.appendChild(trigger);

    render(<GalleryLightbox item={mockItem} returnFocusEl={trigger} onClose={onClose} />);

    const dialog = screen.getByRole("dialog");
    const closeButton = within(dialog).getByRole("button", { name: "Close preview" });
    expect(document.activeElement).toBe(closeButton);

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(trigger);
    trigger.remove();
  });

  it("restores focus to the trigger when Escape is pressed", () => {
    const onClose = vi.fn();
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);

    render(<GalleryLightbox item={mockItem} returnFocusEl={trigger} onClose={onClose} />);

    fireEvent.keyDown(window, { key: "Escape" });

    expect(onClose).toHaveBeenCalledOnce();
    expect(document.activeElement).toBe(trigger);
    trigger.remove();
  });

  it("closes without error when the trigger is no longer in the document", () => {
    const onClose = vi.fn();
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);
    trigger.remove();

    render(<GalleryLightbox item={mockItem} returnFocusEl={trigger} onClose={onClose} />);

    const closeButton = within(screen.getByRole("dialog")).getByRole("button", { name: "Close preview" });
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledOnce();
  });
});