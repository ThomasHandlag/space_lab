const contacts = [
  { name: "Workman", role: "Designer", avatar: "W" },
  { name: "Livia Bator", role: "CEO", avatar: "L" },
  { name: "Randy Press", role: "Director", avatar: "R" },
];

export default function QuickTransfer() {
  return (
    <section className="bg-white rounded-[25px] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-6">Quick Transfer</h2>
      <div className="flex items-center gap-4 mb-6">
        {contacts.map((contact) => (
          <button
            key={contact.name}
            className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] flex items-center justify-center text-white font-semibold text-lg">
              {contact.avatar}
            </div>
            <div className="text-center">
              <p className="font-semibold text-[#232323] text-sm">{contact.name}</p>
              <p className="text-xs text-[var(--secondary-text)]">{contact.role}</p>
            </div>
          </button>
        ))}
        <button className="w-14 h-14 rounded-full border-2 border-dashed border-[var(--border)] flex items-center justify-center text-[var(--secondary-text)] hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] transition-colors">
          <span className="text-2xl">+</span>
        </button>
      </div>
      <div>
        <p className="text-sm font-semibold text-[var(--secondary-text)] mb-3">Write Amount</p>
        <div className="flex items-center gap-3 bg-[var(--input-bg)] rounded-full px-6 py-3">
          <span className="text-[var(--secondary-text)]">$</span>
          <input
            type="text"
            defaultValue="525.50"
            className="flex-1 bg-transparent font-semibold text-[var(--primary)] outline-none"
          />
          <button className="bg-[var(--button-primary)] text-white px-6 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Send
          </button>
        </div>
      </div>
    </section>
  );
}
