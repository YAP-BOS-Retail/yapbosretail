import Link from 'next/link';
import { useRouter } from 'next/router';
import content from '../lib/content';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

export default function Services() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const s = t.servicesPage;

  return (
    <Layout t={t} title={`${s.title} — YAP-BOS Retail`}>
      <PageHero eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />

      {/* SERVICES DETAIL */}
      <section className="border-b border-white/10 px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl divide-y divide-white/10">
          {s.items.map((item, i) => (
            <div key={i} className="grid grid-cols-1 gap-6 py-12 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-1">
                <span className="font-display text-3xl text-white/25">0{i + 1}</span>
              </div>
              <div className="lg:col-span-2">
                <h3 className="font-display text-2xl font-medium">{item.title}</h3>
              </div>
              <div className="lg:col-span-2">
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                {item.points && (
                  <ul className="mt-5 flex flex-col gap-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-sm text-white/50">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-white/10 bg-panel px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-widest2 text-white/50">{s.process.eyebrow}</p>
            <h2 className="font-display text-3xl font-medium lg:text-4xl">{s.process.title}</h2>
          </div>
          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="divider-glow absolute left-0 right-0 top-6 hidden lg:block" />
            {s.process.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black font-display text-sm">
                  {i + 1}
                </div>
                <h3 className="font-display text-base font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/55">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium lg:text-4xl">{s.cta.title}</h2>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-xs uppercase tracking-widest2 text-black transition hover:bg-white/85"
          >
            {s.cta.cta}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
