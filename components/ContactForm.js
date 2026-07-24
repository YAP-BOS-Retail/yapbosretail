import { useEffect, useState } from 'react';

export default function ContactForm({ t, defaultMessage = '' }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: defaultMessage });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    if (defaultMessage) {
      setForm((f) => (f.message ? f : { ...f, message: defaultMessage }));
    }
  }, [defaultMessage]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', company: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
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
        disabled={status === 'sending'}
        className="mt-2 rounded-full border border-white bg-white px-6 py-3 text-xs uppercase tracking-widest2 text-black transition hover:bg-transparent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'sending' ? t.form.sending : t.form.submit}
      </button>
      {status === 'success' && <p className="text-sm text-white/70">{t.form.success}</p>}
      {status === 'error' && <p className="text-sm text-red-400">{t.form.error}</p>}
    </form>
  );
}
