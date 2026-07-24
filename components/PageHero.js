export default function PageHero({ eyebrow, title, subtitle, badge }) {
  return (
    <section className="bg-grid relative overflow-hidden border-b border-white/10 px-6 pb-20 pt-40 lg:px-10 lg:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs uppercase tracking-widest2 text-white/50">{eyebrow}</p>
        <h1 className="font-display text-gradient text-4xl font-medium leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 lg:text-lg">{subtitle}</p>}
        {badge && (
          <span className="mt-6 inline-block rounded-full border border-white/20 px-4 py-1.5 text-xs uppercase tracking-widest2 text-white/60">
            {badge}
          </span>
        )}
      </div>
    </section>
  );
}
