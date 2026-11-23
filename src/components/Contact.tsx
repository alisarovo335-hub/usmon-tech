import { Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { hasContactChannel, siteConfig } from "@/config/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const hasAnyChannel =
    hasContactChannel("email") ||
    hasContactChannel("whatsapp") ||
    hasContactChannel("telegram") ||
    hasContactChannel("linkedIn");

  return (
    <section id="contact" className="scroll-mt-24 border-t border-neutral-900 bg-neutral-950/50 py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Start your project</h2>
        <p className="section-subheading">
          Tell me about your website, app, or software idea. Use the form for a structured brief or email me directly
          {hasContactChannel("email") ? (
            <>
              {" "}
              at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand hover:underline">
                {siteConfig.email}
              </a>
            </>
          ) : null}
          .
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <aside className="lg:col-span-2">
            <div className="premium-card space-y-6">
              <h3 className="font-display text-lg font-semibold">Direct contact</h3>
              {hasAnyChannel ? (
                <ul className="space-y-4">
                  {hasContactChannel("email") ? (
                    <li>
                      <ContactLink
                        href={`mailto:${siteConfig.email}`}
                        icon={Mail}
                        label="Email"
                        value={siteConfig.email}
                      />
                    </li>
                  ) : null}
                  {hasContactChannel("whatsapp") ? (
                    <li>
                      <ContactLink
                        href={formatWhatsApp(siteConfig.whatsapp)}
                        icon={MessageCircle}
                        label="WhatsApp"
                        value={siteConfig.whatsapp}
                        external
                      />
                    </li>
                  ) : null}
                  {hasContactChannel("telegram") ? (
                    <li>
                      <ContactLink
                        href={formatTelegram(siteConfig.telegram)}
                        icon={Send}
                        label="Telegram"
                        value={siteConfig.telegram}
                        external
                      />
                    </li>
                  ) : null}
                  {hasContactChannel("linkedIn") ? (
                    <li>
                      <ContactLink
                        href={siteConfig.linkedIn}
                        icon={Linkedin}
                        label="LinkedIn"
                        value="Profile"
                        external
                      />
                    </li>
                  ) : null}
                </ul>
              ) : null}
              {hasContactChannel("email") && !hasContactChannel("whatsapp") && !hasContactChannel("telegram") ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-secondary w-full text-center text-sm sm:w-auto"
                >
                  Email {siteConfig.email}
                </a>
              ) : null}
              <p className="text-xs text-neutral-500">
                Response time is typically within 24–48 hours on business days. Share your timeline and budget range
                for a faster quote.
              </p>
            </div>
          </aside>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 transition-colors hover:border-neutral-600"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span>
        <span className="block text-xs font-medium uppercase tracking-wider text-neutral-500">{label}</span>
        <span className="text-sm font-medium text-neutral-100">{value}</span>
      </span>
    </a>
  );
}

function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, "");
  return `https://wa.me/${digits}`;
}

function formatTelegram(value: string): string {
  const handle = value.startsWith("@") ? value.slice(1) : value;
  return `https://t.me/${handle}`;
}