export interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  const name = values.name.trim();
  if (name.length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  const message = values.message.trim();
  if (message.length < 20) {
    errors.message = "Please describe your project (at least 20 characters).";
  }

  return errors;
}

export function isContactFormValid(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length === 0;
}