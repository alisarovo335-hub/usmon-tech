import { useState, type FormEvent } from "react";
import { Loader2, Send } from "lucide-react";
import { hasContactChannel, siteConfig } from "@/config/site";
import {
  isContactFormValid,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/contactForm";
import { getFormspreeEndpoint, isFormspreeConfigured } from "@/lib/formspree";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  budget: "",
  message: "",
};

type SubmitStatus =
  | "idle"
  | "submitting"
  | "sent"
  | "validation_error"
  | "delivery_unavailable"
  | "delivery_failed";

export function ContactForm() {
  const formspreeReady = isFormspreeConfigured();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [touched, setTouched] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    setStatus("idle");
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (!isContactFormValid(nextErrors)) {
      setStatus("validation_error");
      return;
    }

    const endpoint = getFormspreeEndpoint();
    if (!endpoint) {
      setStatus("delivery_unavailable");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim() || undefined,
          budget: values.budget || undefined,
          message: values.message.trim(),
          _subject: `USMON TECH — inquiry from ${values.name.trim()}`,
        }),
      });

      if (response.ok) {
        setValues(initialValues);
        setTouched(false);
        setErrors({});
        setStatus("sent");
        return;
      }
      setStatus("delivery_failed");
    } catch {
      setStatus("delivery_failed");
    }
  }

  function updateField<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => {
      const next = { ...prev, [key]: value };
      if (touched) {
        setErrors(validateContactForm(next));
      }
      return next;
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="premium-card space-y-5"
      noValidate
      aria-describedby="contact-form-notice"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Your name"
          required
          error={errors.name}
          value={values.name}
          onChange={(v) => updateField("name", v)}
        />
        <Field
          id="contact-email"
          label="Email"
          type="email"
          required
          error={errors.email}
          value={values.email}
          onChange={(v) => updateField("email", v)}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-company"
          label="Company (optional)"
          value={values.company}
          onChange={(v) => updateField("company", v)}
        />
        <div>
          <label htmlFor="contact-budget" className="mb-1.5 block text-sm font-medium text-neutral-300">
            Budget range (optional)
          </label>
          <select
            id="contact-budget"
            className="w-full rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            value={values.budget}
            onChange={(e) => updateField("budget", e.target.value)}
          >
            <option value="">Select a range</option>
            <option value="under-2k">Under $2,000</option>
            <option value="2k-5k">$2,000 – $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-plus">$15,000+</option>
          </select>
        </div>
      </div>
      <MessageField
        id="contact-message"
        label="Project details"
        required
        error={errors.message}
        value={values.message}
        onChange={(v) => updateField("message", v)}
      />

      <p id="contact-form-notice" className="text-xs leading-relaxed text-neutral-500">
        {formspreeReady
          ? "Submit this form to send your inquiry securely via Formspree."
          : "Form delivery is not configured yet. Set VITE_FORMSPREE_ENDPOINT in a local .env file (see .env.example), or email me directly."}
        {hasContactChannel("email") ? (
          <>
            {" "}
            Email:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-brand hover:underline">
              {siteConfig.email}
            </a>
          </>
        ) : null}
      </p>

      {status === "sent" ? (
        <div
          role="status"
          className="rounded-xl border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand"
        >
          Thank you — your inquiry was submitted. I will reply as soon as possible (usually within 24–48 hours on
          business days).
        </div>
      ) : null}

      {status === "delivery_unavailable" ? (
        <div
          role="status"
          className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-4 py-3 text-sm text-amber-200"
        >
          Your details are valid, but the form could not send because no Formspree endpoint is configured. Please use
          the email link beside this form instead.
        </div>
      ) : null}

      {status === "delivery_failed" ? (
        <div role="alert" className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          Something went wrong while sending your message. Please try again or email me directly.
        </div>
      ) : null}

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            Sending…
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          </>
        ) : (
          <>
            Submit inquiry
            <Send className="h-4 w-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-300">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`w-full rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:ring-1 ${
          error
            ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/50"
            : "border-neutral-700 focus:border-brand focus:ring-brand"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function MessageField({
  id,
  label,
  value,
  onChange,
  error,
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-neutral-300">
        {label}
        {required ? <span className="text-brand"> *</span> : null}
      </label>
      <textarea
        id={id}
        rows={5}
        required={required}
        className={`w-full resize-y rounded-xl border bg-neutral-950 px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:ring-1 ${
          error
            ? "border-red-500/70 focus:border-red-500 focus:ring-red-500/50"
            : "border-neutral-700 focus:border-brand focus:ring-brand"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}