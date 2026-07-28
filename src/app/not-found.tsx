import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-accent px-5 py-3 font-mono text-sm text-background transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
