import Image from "next/image";

const GITHUB_URL = "https://github.com/Nagoloum/NagosUI";

export function SiteFooter() {
  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-fg">
          <Image
            src="/logo.png"
            alt="NagosUI"
            width={24}
            height={24}
            className="rounded-md brightness-0 dark:brightness-100"
          />
          Nagos<span className="text-accent">UI</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <a className="transition-colors hover:text-fg" href="#composants">
            Composants
          </a>
          <a className="transition-colors hover:text-fg" href="#features">
            Pourquoi
          </a>
          <a
            className="transition-colors hover:text-fg"
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </nav>

        <span className="text-sm text-muted">
          Par Nagos · {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
