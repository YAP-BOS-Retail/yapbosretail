import { useEffect, useState } from 'react';

export default function ContactForm({ t, defaultMessage = '' }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: defaultMessage });

  useEffect(() => {
    if (defaultMessage) {
      setForm((f) => (f.message ? f : { ...f, message: defaultMessage }));
    }
  }, [defaultMessage]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`YAP-BOS Retail — ${form.company || form.name || 'Contact'}`);
    const body = encodeURIComponent(
      `${t.form.name}: ${form.name}\n${t.form.company}: ${form.company}\n${t.form.email}: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:welcome@yapbosretail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        required
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder={t.form.name}
        className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/40"
      />
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder={t.form.company}
        className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/40"
      />
      <input
        required
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder={t.form.email}
        className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/40"
      />
      <textarea
        required
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t.form.message}
        rows={4}
        className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/40"
      />
      <button
        type="submit"
        className="mt-2 rounded-full border border-white bg-white px-6 py-3 text-xs uppercase tracking-widest2 text-black transition hover:bg-transparent hover:text-white"
      >
        {t.form.submit}
      </button>
    </form>
  );
}
