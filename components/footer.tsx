export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Portfolio. Built with passion and precision.
          </p>
          <p className="text-xs font-mono text-muted-foreground/60">
            Engineering + Design
          </p>
        </div>
      </div>
    </footer>
  )
}
