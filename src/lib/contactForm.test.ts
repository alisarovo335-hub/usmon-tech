import { describe, expect, it } from "vitest";
import { isContactFormValid, validateContactForm } from "./contactForm";

describe("validateContactForm", () => {
  it("accepts valid input", () => {
    const errors = validateContactForm({
      name: "Alex Client",
      email: "alex@example.com",
      company: "",
      budget: "",
      message: "We need a marketplace MVP with admin dashboard.",
    });
    expect(isContactFormValid(errors)).toBe(true);
  });

  it("rejects invalid email and short message", () => {
    const errors = validateContactForm({
      name: "A",
      email: "not-an-email",
      company: "",
      budget: "",
      message: "Too short",
    });
    expect(errors.name).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.message).toBeDefined();
  });
});