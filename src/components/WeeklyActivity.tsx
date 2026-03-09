import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Sat", deposit: 180, withdraw: 120 },
  { name: "Sun", deposit: 220, withdraw: 140 },
  { name: "Mon", deposit: 280, withdraw: 180 },
  { name: "Tue", deposit: 320, withdraw: 200 },
  { name: "Wed", deposit: 250, withdraw: 160 },
  { name: "Thu", deposit: 380, withdraw: 220 },
  { name: "Fri", deposit: 420, withdraw: 280 },
];

export default function WeeklyActivity() {
  return (
    <section className="bg-white rounded-[25px] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-6">Weekly Activity</h2>
      <div className="h-[280px] min-h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F3F5" vertical={false} />
            <XAxis dataKey="name" tick={{ fill: "#718EBF", fontSize: 13 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#718EBF", fontSize: 13 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              formatter={(value) => [value ?? 0, ""]}
            />
            <Legend
              wrapperStyle={{ paddingTop: "20px" }}
              formatter={(value) => (
                <span className="text-sm text-[var(--secondary-text)]">{value}</span>
              )}
              iconType="circle"
              iconSize={8}
            />
            <Bar dataKey="deposit" fill="#16DBCC" radius={[4, 4, 0, 0]} name="Deposit" />
            <Bar dataKey="withdraw" fill="#FF82AC" radius={[4, 4, 0, 0]} name="Withdraw" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
