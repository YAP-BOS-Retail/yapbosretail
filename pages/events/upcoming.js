import Link from 'next/link';
import { useRouter } from 'next/router';
import content from '../../lib/content';
import Layout from '../../components/Layout';
import PageHero from '../../components/PageHero';

export default function UpcomingEvents() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const e = t.eventsPage;

  return (
    <Layout t={t} title={`${e.upcomingLabel} — YAP-BOS Retail`}>
      <PageHero eyebrow={e.eyebrow} title={e.upcomingLabel} subtitle={e.subtitle} />

      {/* UPCOMING EVENTS */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {e.items.map((item) => (
              <Link
                key={item.slug}
                href={`/events/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-panel p-8 transition hover:border-white/30"
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
                  {item.deadlineValue && (
                    <span>{item.deadlineLabel}: {item.deadlineValue}</span>
                  )}
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
      <section className="border-b border-white/10 bg-panel px-6 py-24 lg:px-10">
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

      {/* PAST EVENTS */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-xs uppercase tracking-widest2 text-white/50">{e.pastLabel}</p>
          {e.past.length === 0 ? (
            <p className="text-sm text-white/40">{e.pastEmptyText}</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {e.past.map((item) => (
                <Link
                  key={item.slug}
                  href={`/events/${item.slug}`}
                  className="group rounded-2xl border border-white/10 bg-panel p-8 opacity-70 transition hover:border-white/30 hover:opacity-100"
                >
                  <span className="inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest2 text-white/60">
                    {item.badge}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">{item.desc}</p>
                </Link>
              ))}
            </div>
          )}
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
