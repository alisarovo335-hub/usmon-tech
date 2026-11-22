import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { getFormspreeEndpoint, isFormspreeConfigured } from "./formspree";

describe("formspree env", () => {
  beforeEach(() => {
    vi.stubEnv("VITE_FORMSPREE_ENDPOINT", "");
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns empty when endpoint is unset", () => {
    expect(getFormspreeEndpoint()).toBe("");
    expect(isFormspreeConfigured()).toBe(false);
  });

  it("returns trimmed endpoint when set", () => {
    vi.stubEnv("VITE_FORMSPREE_ENDPOINT", "  https://formspree.io/f/example  ");
    expect(getFormspreeEndpoint()).toBe("https://formspree.io/f/example");
    expect(isFormspreeConfigured()).toBe(true);
  });
});