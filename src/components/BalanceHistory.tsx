import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jul", balance: 200 },
  { month: "Aug", balance: 350 },
  { month: "Sep", balance: 280 },
  { month: "Oct", balance: 420 },
  { month: "Nov", balance: 380 },
  { month: "Dec", balance: 550 },
  { month: "Jan", balance: 480 },
];

export default function BalanceHistory() {
  return (
    <section className="bg-white rounded-[25px] p-6 shadow-sm col-span-2">
      <h2 className="text-xl font-semibold text-[var(--primary)] mb-6">Balance History</h2>
      <div className="h-[280px] min-h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2D60FF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E6EFF5" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fill: "#718EBF", fontSize: 13 }}
              axisLine={{ stroke: "#E6EFF5" }}
              tickLine={{ stroke: "#E6EFF5" }}
            />
            <YAxis
              tick={{ fill: "#718EBF", fontSize: 13 }}
              axisLine={{ stroke: "#E6EFF5" }}
              tickLine={{ stroke: "#E6EFF5" }}
            />
            <Tooltip
              contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              formatter={(value) => [`$${value ?? 0}`, "Balance"]}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#2D60FF"
              strokeWidth={2}
              fill="url(#balanceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
