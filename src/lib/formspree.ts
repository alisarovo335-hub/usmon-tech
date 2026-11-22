/** Full Formspree form URL from environment (e.g. https://formspree.io/f/xxxxxxxx). */
export function getFormspreeEndpoint(): string {
  const value = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  if (typeof value !== "string") {
    return "";
  }
  return value.trim();
}

export function isFormspreeConfigured(): boolean {
  return getFormspreeEndpoint().length > 0;
}