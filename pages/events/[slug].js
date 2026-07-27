import Link from 'next/link';
import { useRouter } from 'next/router';
import content from '../../lib/content';
import Layout from '../../components/Layout';
import PageHero from '../../components/PageHero';

export default function EventDetail() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const e = t.eventsPage;
  const item = e.items.find((it) => it.slug === router.query.slug);

  if (!item) return null;

  return (
    <Layout t={t} title={`${item.title} — YAP-BOS Retail`}>
      <PageHero eyebrow={item.status || e.featuredLabel} title={item.title} badge={item.badge} />

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <Link href="/events/upcoming" className="text-xs uppercase tracking-widest2 text-white/40 transition hover:text-white">
            ← {e.upcomingLabel}
          </Link>

          <div className="mt-8 rounded-2xl border border-white/10 bg-panel p-8 lg:p-14">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <p className="text-white/60 leading-relaxed">{item.desc}</p>

                <div className="mt-10">
                  <p className="text-xs uppercase tracking-widest2 text-white/40">{item.whoLabel}</p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {item.who.map((w, i) => (
                      <span key={i} className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/70">
                        {w}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contact?event=${item.slug}`}
                  className="mt-10 inline-block rounded-full bg-white px-8 py-3 text-xs uppercase tracking-widest2 text-black transition hover:bg-white/85"
                >
                  {item.cta}
                </Link>
              </div>

              <div className="flex flex-col justify-center gap-8 border-t border-white/10 pt-8 lg:col-span-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <p className="text-2xl font-display font-medium">{item.attendeesValue}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest2 text-white/40">{item.attendeesLabel}</p>
                </div>
                <div>
                  <p className="font-display text-sm font-medium leading-snug">{item.sectorValue}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest2 text-white/40">{item.sectorLabel}</p>
                </div>
                <div>
                  <p className="font-display text-sm font-medium leading-snug">{item.formatValue}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest2 text-white/40">{item.formatLabel}</p>
                </div>
                {item.deadlineValue && (
                  <div>
                    <p className="font-display text-sm font-medium leading-snug">{item.deadlineValue}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest2 text-white/40">{item.deadlineLabel}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const locales = ['tr', 'en'];
  const slugs = content.tr.eventsPage.items.map((it) => it.slug);
  const paths = [];
  locales.forEach((locale) => {
    slugs.forEach((slug) => paths.push({ params: { slug }, locale }));
  });
  return { paths, fallback: false };
}

export async function getStaticProps() {
  return { props: {} };
}
