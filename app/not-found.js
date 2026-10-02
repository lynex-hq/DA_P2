import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | DESIGN ARK',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 bg-neutral-950 text-white">
      <span className="text-xs uppercase tracking-widest text-neutral-400 mb-3">404 Error</span>
      <h1 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">Page Not Found</h1>
      <p className="text-neutral-400 max-w-md mb-8 text-sm sm:text-base leading-relaxed">
        The architectural design or space you are looking for does not exist or may have been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-700 bg-neutral-900 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
      >
        Return to Home
      </Link>
    </main>
  );
}
