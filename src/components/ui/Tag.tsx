export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
