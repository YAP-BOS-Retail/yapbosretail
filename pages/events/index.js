import Link from 'next/link';
import { useRouter } from 'next/router';
import content from '../../lib/content';
import Layout from '../../components/Layout';
import PageHero from '../../components/PageHero';

export default function Events() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const e = t.eventsPage;

  return (
    <Layout t={t} title={`${e.title} — YAP-BOS Retail`}>
      <PageHero eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} />

      {/* INTRO */}
      <section className="border-b border-white/10 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-medium lg:text-3xl">{e.intro.title}</h2>
          <p className="mt-5 text-white/60 leading-relaxed">{e.intro.desc}</p>
        </div>
      </section>

      {/* AGENDA */}
      <section className="border-b border-white/10 bg-panel px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{e.agenda.eyebrow}</p>
            <h2 className="font-display text-3xl font-medium lg:text-4xl">{e.agenda.title}</h2>
            {e.agenda.note && <p className="mt-4 text-sm text-white/50">{e.agenda.note}</p>}
          </div>
          <div className="mt-14 flex flex-col divide-y divide-white/10 rounded-2xl border border-white/10 bg-black">
            {e.agenda.items.map((a, i) => (
              <div key={i} className="grid grid-cols-1 gap-2 p-6 sm:grid-cols-4 sm:gap-6">
                <div className="font-display text-sm text-white/40 sm:col-span-1">{a.time}</div>
                <div className="sm:col-span-3">
                  <h3 className="font-display text-base font-medium">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/55">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{e.speakers.eyebrow}</p>
            <h2 className="font-display text-3xl font-medium lg:text-4xl">{e.speakers.title}</h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {e.speakers.items.map((sp, i) => (
              <div key={i} className="rounded-2xl border border-white/10 p-7 text-center">
                <h3 className="font-display text-base font-medium">{sp.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{sp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT LISTINGS */}
      <section className="border-b border-white/10 bg-panel px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs uppercase tracking-widest2 text-white/50">{e.featuredLabel}</p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {e.items.map((item) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-black p-8 transition hover:border-white/30"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest2 text-white/60">
                    {item.badge}
                  </span>
                  {item.status && (
                    <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs uppercase tracking-widest2 text-white/70">
                      {item.status}
                    </span>
                  )}
                </div>
                <h3 className="font-display mt-5 text-2xl font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.desc}</p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-widest2 text-white/40">
                  <span>{item.sectorValue}</span>
                  <span>{item.attendeesValue} {item.attendeesLabel}</span>
                </div>
                <span className="mt-6 inline-block text-xs uppercase tracking-widest2 text-white transition group-hover:underline">
                  {item.viewLabel} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT IN SERIES */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{e.nextLabel}</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {e.next.map((n, i) => (
              <div key={i} className="flex flex-col gap-3 bg-black p-8">
                <h3 className="font-display text-lg font-medium">{n.title}</h3>
                <span className="text-xs uppercase tracking-widest2 text-white/40">{n.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">{e.cta.title}</h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full border border-white/25 px-8 py-3 text-xs uppercase tracking-widest2 text-white transition hover:border-white"
          >
            {e.cta.cta}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
