"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  function validate() {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
        <h2 className="mb-2 text-lg font-bold text-gray-900">Message received!</h2>
        <p className="text-sm text-gray-600">
          Thank you for reaching out, <strong>{form.name}</strong>. We&apos;ll get back to you at{" "}
          <strong>{form.email}</strong> within 1–2 business days.
        </p>
        <button
          onClick={() => { setForm({ name: "", email: "", message: "" }); setSubmitted(false); }}
          className="mt-6 rounded-lg border border-border px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-border bg-white p-6 shadow-sm"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Rahul Sharma"
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-primary/20 ${
              errors.name
                ? "border-red-400 bg-red-50"
                : "border-border bg-white focus:border-primary"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="rahul@example.com"
            className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-primary/20 ${
              errors.email
                ? "border-red-400 bg-red-50"
                : "border-border bg-white focus:border-primary"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            placeholder="Tell us how we can help..."
            className={`w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm text-gray-800 outline-none transition focus:ring-2 focus:ring-primary/20 ${
              errors.message
                ? "border-red-400 bg-red-50"
                : "border-border bg-white focus:border-primary"
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-primary py-2.5 text-sm font-bold text-white transition hover:bg-primary-600 active:scale-[0.98]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
