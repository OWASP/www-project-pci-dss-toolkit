import { useTenant } from '@/tenants/tenantContext';
import { tenantComplianceData } from '@/tenants/data/tenantData';
import TenantSwitcher from './TenantSwitcher';

const AdminDashboard = () => {
  const { tenantId } = useTenant();
  const data = tenantComplianceData[tenantId];

  return (
    <div className="p-4">
      <TenantSwitcher />
      <h1 className="text-2xl font-bold mt-4">{data.name} Compliance Dashboard</h1>
      <p>Compliance Score: {data.complianceScore}%</p>
      <p>Open Issues: {data.issues}</p>
    </div>
  );
};

export default AdminDashboard;
