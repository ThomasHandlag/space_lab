import { Link } from "react-router-dom";

const menuItems = [
  { icon: "🏠", label: "Dashboard", href: "/", active: true },
  { icon: "💳", label: "Transactions", href: "/transactions" },
  { icon: "👤", label: "Accounts", href: "/accounts" },
  { icon: "📈", label: "Investments", href: "/investments" },
  { icon: "💳", label: "Credit Cards", href: "/credit-cards" },
  { icon: "💰", label: "Loans", href: "/loans" },
  { icon: "🔧", label: "Services", href: "/services" },
  { icon: "⭐", label: "My Privileges", href: "/privileges" },
  { icon: "⚙️", label: "Setting", href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[250px] bg-white border-r border-[var(--border)] z-40">
      <div className="flex flex-col h-full pt-6">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="font-semibold text-[var(--primary)] text-xl">BankDash.</span>
          </div>
        </div>
        <nav className="flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-4 px-6 py-4 transition-colors ${
                item.active
                  ? "bg-[var(--primary-accent)]/5 border-l-4 border-[var(--primary-accent)] rounded-r-xl text-[var(--primary-accent)]"
                  : "text-[var(--sidebar-text)] hover:bg-gray-50"
              }`}
            >
              <span className="text-xl w-6 text-center">{item.icon}</span>
              <span className="font-medium text-base">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
