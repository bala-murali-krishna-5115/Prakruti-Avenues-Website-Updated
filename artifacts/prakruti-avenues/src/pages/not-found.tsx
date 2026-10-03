import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-primary px-5 py-10 text-primary-foreground">
      <div className="mx-auto flex min-h-[calc(100dvh-5rem)] max-w-5xl flex-col justify-between">
        <a data-testid="link-404-logo" href="/" className="flex items-center gap-3">
          <img src="/assets/logo.jpeg" alt="Prakruti Avenues Pvt. Ltd." className="h-14 w-14 rounded-xl object-cover" />
          <span className="font-display text-xl">Prakruti Avenues</span>
        </a>
        <div className="grid gap-10 py-16 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <p className="font-display text-[9rem] leading-none text-accent sm:text-[13rem]">404</p>
          <div>
            <p className="eyebrow text-accent">A wrong turn</p>
            <h1 className="mt-4 max-w-xl font-display text-5xl leading-[1.02] sm:text-7xl">This address has not been plotted yet.</h1>
            <p className="mt-6 max-w-md text-base leading-7 text-primary-foreground/70">The page you are looking for may have moved. Let’s get you back to the useful stuff.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a data-testid="link-404-home" href="/" className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"><Home size={16}/> Go home</a>
              <a data-testid="link-404-projects" href="/projects" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-5 py-3 text-sm font-bold"><Search size={16}/> Browse projects</a>
            </div>
          </div>
        </div>
        <a data-testid="link-404-back" href="/" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60"><ArrowLeft size={15}/> Return to Prakruti Avenues</a>
      </div>
    </main>
  );
}