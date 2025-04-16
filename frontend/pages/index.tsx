import ComplianceChart from '../components/ComplianceChart';
import AlertsPanel from '../components/AlertsPanel';
import SystemHealth from '../components/SystemHealth';

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin PCI Compliance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ComplianceChart />
        <AlertsPanel />
        <SystemHealth />
      </div>
    </div>
  );
}
