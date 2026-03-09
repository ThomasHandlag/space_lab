export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-[var(--border)]">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-[var(--card-bg)]" />
            <h1 className="text-2xl font-semibold text-[var(--primary)]">Overview</h1>
          </div>
          <div className="flex items-center gap-3 bg-[var(--card-bg)] rounded-full px-4 py-2.5 w-64">
            <svg className="w-5 h-5 text-[var(--sidebar-text)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-sm text-[var(--search-placeholder)]">Search for something</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[var(--card-bg)]" />
        </div>
      </div>
    </header>
  );
}
