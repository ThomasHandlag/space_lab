const cards = [
  {
    id: 1,
    gradient: "linear-gradient(136deg, rgba(76, 73, 237, 1) 0%, rgba(10, 6, 244, 1) 100%)",
    balance: "$5,756",
    cardNumber: "3778 **** **** 1234",
    holder: "Eddy Cusuma",
    validThru: "12/22",
    isPrimary: true,
  },
  {
    id: 2,
    gradient: "none",
    balance: "$5,756",
    cardNumber: "3778 **** **** 1234",
    holder: "Eddy Cusuma",
    validThru: "12/22",
    isPrimary: false,
  },
];

export default function MyCards() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-[var(--primary)]">My Cards</h2>
        <button className="text-sm font-semibold text-[var(--primary)] hover:underline">See All</button>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[350px] h-[220px] rounded-[25px] overflow-hidden flex-shrink-0 relative"
            style={{
              background: card.isPrimary ? card.gradient : "white",
              border: card.isPrimary ? "none" : "1px solid #DFEAF2",
            }}
          >
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-normal opacity-70 mb-1" style={{ color: card.isPrimary ? "white" : "var(--secondary-text)" }}>
                    Balance
                  </p>
                  <p className="text-xl font-semibold" style={{ color: card.isPrimary ? "white" : "var(--primary)" }}>
                    {card.balance}
                  </p>
                </div>
                <div className="w-9 h-9 rounded bg-white/20" />
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div>
                    <p className="text-xs font-normal opacity-70" style={{ color: card.isPrimary ? "rgba(255,255,255,0.7)" : "var(--secondary-text)" }}>
                      CARD HOLDER
                    </p>
                    <p className="text-sm font-semibold" style={{ color: card.isPrimary ? "white" : "var(--primary)" }}>
                      {card.holder}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-normal opacity-70" style={{ color: card.isPrimary ? "rgba(255,255,255,0.7)" : "var(--secondary-text)" }}>
                      VALID THRU
                    </p>
                    <p className="text-sm font-semibold" style={{ color: card.isPrimary ? "white" : "var(--primary)" }}>
                      {card.validThru}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold tracking-wider" style={{ color: card.isPrimary ? "white" : "var(--primary)" }}>
                    {card.cardNumber}
                  </p>
                  <div className="w-11 h-11 rounded" style={{ background: "rgba(255,255,255,0.3)" }} />
                </div>
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-[70px]"
              style={{
                background: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
