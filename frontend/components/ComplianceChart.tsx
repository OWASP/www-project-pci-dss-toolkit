import { useEffect, useState } from 'react';
import { socket } from '../utils/socket';

const ComplianceChart = () => {
  const [metric, setMetric] = useState<any>(null);

  useEffect(() => {
    socket.on('metricUpdate', (data) => setMetric(data));
    return () => socket.off('metricUpdate');
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Compliance Metrics</h2>
      {metric ? (
        <p>{metric.metricName}: {metric.value} ({metric.status})</p>
      ) : (
        <p>Loading metrics...</p>
      )}
    </div>
  );
};

export default ComplianceChart;
