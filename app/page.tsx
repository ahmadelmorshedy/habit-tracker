export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center gap-6 px-6 py-16">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Daily Deeds
        </h1>
        <p className="mt-3 text-lg text-black/60 dark:text-white/60">
          Keep track of the few things you want to do every single day.
        </p>
      </header>

      <section aria-labelledby="habits">
        <h2
          id="habits"
          className="text-xs font-medium uppercase tracking-widest text-black/40 dark:text-white/40"
        >
          Today&apos;s habits
        </h2>

        <ul className="mt-3 divide-y divide-black/10 dark:divide-white/15">
          <li className="py-3">Read for twenty minutes</li>
          <li className="py-3">Walk after lunch</li>
          <li className="py-3">Lights out by eleven</li>
        </ul>
      </section>
    </main>
  );
}
