/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Full Formspree form URL, e.g. https://formspree.io/f/your_form_id */
  readonly VITE_FORMSPREE_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}