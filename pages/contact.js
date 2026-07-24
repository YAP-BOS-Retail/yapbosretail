import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import content from '../lib/content';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const c = t.contactPage;

  const [relatedEvent, setRelatedEvent] = useState(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('event');
    const match = t.eventsPage.items.find((it) => it.slug === slug);
    if (match) setRelatedEvent(match);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultMessage = relatedEvent
    ? c.eventMessageTemplate.replace('{title}', relatedEvent.title)
    : '';

  return (
    <Layout t={t} title={`${c.title} — YAP-BOS Retail`}>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              {relatedEvent && (
                <div className="mb-8 rounded-2xl border border-white/10 bg-panel p-5">
                  <p className="text-xs uppercase tracking-widest2 text-white/40">{c.eventNoteLabel}</p>
                  <p className="mt-2 text-white/80">{relatedEvent.title}</p>
                </div>
              )}
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-white/40">{c.directLabel}</p>
                  <a href="mailto:welcome@yapbosretail.com" className="mt-1 block text-white/80 hover:text-white">
                    welcome@yapbosretail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest2 text-white/40">{c.locationLabel}</p>
                  <p className="mt-1 text-white/80">{c.locationValue}</p>
                </div>
              </div>
            </div>

            <ContactForm t={c} defaultMessage={defaultMessage} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
