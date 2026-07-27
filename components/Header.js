import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Header({ t }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const eventsRef = useRef(null);
  const otherLocale = router.locale === 'tr' ? 'en' : 'tr';

  const nearestEvent = t.eventsPage.items[0];

  useEffect(() => {
    if (!eventsOpen) return;
    const handleClickOutside = (e) => {
      if (eventsRef.current && !eventsRef.current.contains(e.target)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [eventsOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="YAP-BOS Retail" width={168} height={63} priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/services"
            className={`text-xs uppercase tracking-widest2 transition hover:text-white ${
              router.pathname === '/services' ? 'text-white' : 'text-white/70'
            }`}
          >
            {t.nav.services}
          </Link>

          <div
            ref={eventsRef}
            className="relative"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            <Link
              href="/events"
              onClick={() => setEventsOpen(false)}
              className={`text-xs uppercase tracking-widest2 transition hover:text-white ${
                router.pathname.startsWith('/events') ? 'text-white' : 'text-white/70'
              }`}
            >
              {t.nav.events}
            </Link>

            {eventsOpen && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-md">
                  {nearestEvent && (
                    <Link
                      href={`/events/${nearestEvent.slug}`}
                      onClick={() => setEventsOpen(false)}
                      className="block rounded-lg px-3 py-3 text-left transition hover:bg-white/5"
                    >
                      <span className="text-[10px] uppercase tracking-widest2 text-white/40">
                        {nearestEvent.status || t.eventsPage.featuredLabel}
                      </span>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <span className="text-sm text-white">{nearestEvent.title}</span>
                        <span className="whitespace-nowrap text-[10px] uppercase tracking-widest2 text-white/40">
                          {nearestEvent.badge}
                        </span>
                      </div>
                    </Link>
                  )}

                  <div className="my-2 border-t border-white/10" />

                  <Link
                    href="/events/upcoming"
                    onClick={() => setEventsOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-center text-xs uppercase tracking-widest2 text-white/70 transition hover:bg-white/5 hover:text-white"
                  >
                    {t.eventsPage.upcomingLabel} →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`text-xs uppercase tracking-widest2 transition hover:text-white ${
              router.pathname === '/contact' ? 'text-white' : 'text-white/70'
            }`}
          >
            {t.nav.contact}
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={router.asPath}
            locale={otherLocale}
            className="text-xs uppercase tracking-widest2 text-white/50 transition hover:text-white"
          >
            {otherLocale}
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/25 px-5 py-2 text-xs uppercase tracking-widest2 text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span className="h-px w-6 bg-white" />
          <span className="h-px w-6 bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/services" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest2 text-white/80">
              {t.nav.services}
            </Link>

            <div className="flex flex-col gap-2">
              <Link href="/events" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest2 text-white/80">
                {t.nav.events}
              </Link>
              {nearestEvent && (
                <div className="ml-3 flex flex-col gap-2 border-l border-white/10 pl-3">
                  <Link
                    href={`/events/${nearestEvent.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-xs text-white/60"
                  >
                    {nearestEvent.title} — {nearestEvent.badge}
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest2 text-white/80">
              {t.nav.contact}
            </Link>

            <Link href={router.asPath} locale={otherLocale} className="text-sm uppercase tracking-widest2 text-white/50">
              {otherLocale}
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-white/25 px-5 py-2 text-center text-xs uppercase tracking-widest2 text-white"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
