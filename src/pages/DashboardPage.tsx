import MyCards from "@/components/MyCards";
import WeeklyActivity from "@/components/WeeklyActivity";
import ExpenseStats from "@/components/ExpenseStats";
import RecentTransactions from "@/components/RecentTransactions";
import QuickTransfer from "@/components/QuickTransfer";
import BalanceHistory from "@/components/BalanceHistory";

export default function DashboardPage() {
  return (
    <div className="max-w-[1190px]">
      <MyCards />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <WeeklyActivity />
        </div>
        <div>
          <ExpenseStats />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <RecentTransactions />
        </div>
        <div>
          <QuickTransfer />
        </div>
        <div className="lg:col-span-1" />
      </div>
      <BalanceHistory />
    </div>
  );
}
