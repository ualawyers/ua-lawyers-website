"use client";

import { useState } from "react";

type Fields = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
};

const EMPTY: Fields = { name: "", phone: "", email: "", subject: "", message: "" };

/**
 * Static form UI — validates and shows a success state, but deliberately makes no network
 * request. Wire up a route handler / Formspree / EmailJS in `handleSubmit` to send for real.
 */
export default function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // No submission target yet — see the note above.
    setSent(true);
    setValues(EMPTY);
  };

  if (sent) {
    return (
      <div className="rounded-md border border-hairline bg-section p-8" role="status">
        <h3 className="text-xl font-semibold">Thank you — your enquiry has been received.</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">
          A member of our team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-sm border border-hairline bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={field}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-brand">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={set("phone")}
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={set("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={field}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-brand">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={values.subject}
          onChange={set("subject")}
          className={field}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={set("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-brand">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="rounded-sm bg-brand px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Send Enquiry
      </button>
    </form>
  );
}
