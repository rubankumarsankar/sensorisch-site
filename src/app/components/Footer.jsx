export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 dark:border-white/10 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="font-semibold text-primary">Sensorisch</h4>
          <p className="mt-2 text-sm text-foreground/70">
            Flavours & Fragrances engineered for impact.
          </p>
        </div>

        <div>
          <h5 className="font-medium">Company</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a className="hover:text-primary" href="/about">About</a></li>
            <li><a className="hover:text-primary" href="/careers">Careers</a></li>
            <li><a className="hover:text-primary" href="/contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-medium">Legal</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a className="hover:text-primary" href="/privacy">Privacy Policy</a></li>
            <li><a className="hover:text-primary" href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-foreground/60">
          © {new Date().getFullYear()} Sensorisch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
