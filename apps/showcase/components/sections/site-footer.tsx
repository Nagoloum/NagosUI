export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/40 sm:flex-row">
        <span>NagosUI — composants frontend premium</span>
        <span>Par Nagos · {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
