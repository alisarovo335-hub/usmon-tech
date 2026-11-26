import { describe, expect, it } from "vitest";
import { restoreFocusToTrigger } from "./restoreFocusToTrigger";

describe("restoreFocusToTrigger", () => {
  it("focuses the trigger when it is in the document", () => {
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);
    trigger.focus();
    const other = document.createElement("button");
    document.body.appendChild(other);
    other.focus();

    restoreFocusToTrigger(trigger);

    expect(document.activeElement).toBe(trigger);
    trigger.remove();
    other.remove();
  });

  it("does nothing when trigger is null", () => {
    const focused = document.createElement("button");
    document.body.appendChild(focused);
    focused.focus();

    restoreFocusToTrigger(null);

    expect(document.activeElement).toBe(focused);
    focused.remove();
  });

  it("does nothing when trigger was removed from the document", () => {
    const trigger = document.createElement("button");
    document.body.appendChild(trigger);
    const focused = document.createElement("button");
    document.body.appendChild(focused);
    focused.focus();
    trigger.remove();

    expect(() => restoreFocusToTrigger(trigger)).not.toThrow();
    expect(document.activeElement).toBe(focused);
    focused.remove();
  });
});