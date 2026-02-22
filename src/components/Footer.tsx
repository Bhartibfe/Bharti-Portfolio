export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-foreground-muted">
          &copy; {new Date().getFullYear()} Bharti Sharma. All rights reserved.
        </p>
        <p className="text-xs text-foreground-muted/60">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
