import Image from 'next/image';

export default function Footer({ t }) {
  return (
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center lg:px-10">
        <Image src="/logo.png" alt="YAP-BOS Retail" width={180} height={68} />
        <p className="max-w-md text-sm text-white/50">{t.footer.tagline}</p>
        <div className="flex items-center gap-6 text-xs uppercase tracking-widest2 text-white/40">
          <a href="mailto:welcome@yapbosretail.com" className="hover:text-white">
            welcome@yapbosretail.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-[11px] text-white/30">
          © {new Date().getFullYear()} YAP-BOS Retail. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
