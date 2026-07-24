import Link from 'next/link';
import { useRouter } from 'next/router';
import content from '../lib/content';
import Layout from '../components/Layout';

export default function Home() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const { hero, stats, pillars, bridge, crossSector, why, ctaBanner } = t.home;

  return (
    <Layout t={t}>
      {/* HERO */}
      <section className="bg-grid relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-40 lg:px-10 lg:pt-48">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs uppercase tracking-widest2 text-white/50">{hero.eyebrow}</p>
          <h1 className="font-display text-gradient text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 lg:text-lg">{hero.subtitle}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/services"
              className="w-full rounded-full bg-white px-8 py-3 text-xs uppercase tracking-widest2 text-black transition hover:bg-white/85 sm:w-auto"
            >
              {hero.ctaPrimary}
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-full border border-white/25 px-8 py-3 text-xs uppercase tracking-widest2 text-white transition hover:border-white sm:w-auto"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10 px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 lg:grid-cols-4">
          {stats.items.map((st, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-2xl font-medium sm:text-3xl">{st.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest2 text-white/40">{st.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PILLARS / SERVICES TEASER */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{pillars.eyebrow}</p>
            <h2 className="font-display text-3xl font-medium lg:text-4xl">{pillars.title}</h2>
            <p className="mt-4 text-white/60">{pillars.subtitle}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.items.map((s, i) => (
              <div key={i} className="flex flex-col gap-4 bg-black p-8">
                <span className="font-display text-sm text-white/30">0{i + 1}</span>
                <h3 className="font-display text-lg font-medium">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-block rounded-full border border-white/25 px-8 py-3 text-xs uppercase tracking-widest2 text-white transition hover:border-white"
            >
              {pillars.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* TWO-WAY BRIDGE */}
      <section className="border-b border-white/10 bg-panel px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{bridge.eyebrow}</p>
            <h2 className="font-display text-3xl font-medium lg:text-4xl">{bridge.title}</h2>
            <p className="mt-4 text-white/60">{bridge.subtitle}</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {bridge.columns.map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-black p-8">
                <h3 className="font-display text-lg font-medium">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-SECTOR TEASER */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{crossSector.eyebrow}</p>
          <h2 className="font-display text-3xl font-medium lg:text-4xl">{crossSector.title}</h2>
          <p className="mt-5 text-white/60">{crossSector.subtitle}</p>
          <Link
            href="/events"
            className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-xs uppercase tracking-widest2 text-black transition hover:bg-white/85"
          >
            {crossSector.cta}
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{why.eyebrow}</p>
            <h2 className="font-display text-3xl font-medium lg:text-4xl">{why.title}</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {why.items.map((w, i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-7">
                <h3 className="font-display text-base font-medium">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">{ctaBanner.title}</h2>
          <p className="mt-4 text-white/60">{ctaBanner.subtitle}</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full border border-white/25 px-8 py-3 text-xs uppercase tracking-widest2 text-white transition hover:border-white"
          >
            {ctaBanner.cta}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
