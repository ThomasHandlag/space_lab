import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#4C49ED" },
  { name: "Investment", value: 20, color: "#16DBCC" },
  { name: "Bill Expense", value: 15, color: "#FF82AC" },
  { name: "Others", value: 35, color: "#FFB74D" },
];

export default function ExpenseStats() {
  return (
    <section className="bg-white rounded-[25px] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-6">Expense Statistics</h2>
      <div className="h-[280px] min-h-[280px] w-full flex items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              formatter={(value, entry) => {
                const payload = entry?.payload as { value?: number } | undefined;
                return (
                  <span className="text-sm text-[var(--primary)]">
                    {payload?.value ?? 0}% {value}
                  </span>
                );
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
