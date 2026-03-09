const transactions = [
  { id: 1, title: "Deposit Paypal", date: "25 January 2021", amount: "+$2,500", type: "credit" },
  { id: 2, title: "Deposit from my Card", date: "28 January 2021", amount: "-$850", type: "debit" },
  { id: 3, title: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400", type: "credit" },
];

export default function RecentTransactions() {
  return (
    <section className="bg-white rounded-[25px] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-6">Recent Transaction</h2>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div key={tx.id} className="flex items-center justify-between py-4 border-b border-[var(--border)] last:border-0">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--card-bg)] flex items-center justify-center">
                <span className="text-lg">💳</span>
              </div>
              <div>
                <p className="font-semibold text-[#232323]">{tx.title}</p>
                <p className="text-sm text-[var(--secondary-text)]">{tx.date}</p>
              </div>
            </div>
            <span
              className={`font-semibold ${tx.type === "credit" ? "text-[var(--success)]" : "text-[var(--danger)]"}`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
