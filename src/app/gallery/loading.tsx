export default function Loading() {
  return (
    <main className="bg-background text-primary-brown">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 py-16 text-center">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-brown/55 sm:text-sm">
            Galeria
          </p>
          <h1 className="text-2xl font-semibold leading-tight sm:text-3xl">
            Toltjuk a galeriat
          </h1>
          <p className="max-w-xl text-base text-primary-brown/70">
            Kerjuk, varj egy pillanatot...
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="relative flex h-10 w-10 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-brown/20" />
            <span className="inline-flex h-10 w-10 animate-spin rounded-full border-2 border-primary-brown/30 border-t-primary-brown" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-brown/70">
            Betoltes...
          </span>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={`skeleton-${index}`}
              className="h-40 rounded-[2.5rem] border border-primary-brown/10 bg-primary-brown/5 shadow-[0_30px_45px_-35px_rgba(89,51,30,0.45)]"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
