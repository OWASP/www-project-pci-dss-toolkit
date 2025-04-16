const AlertsPanel = () => (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Alerts</h2>
      <ul className="list-disc ml-4">
        <li>Unencrypted cardholder data detected</li>
        <li>Vulnerability scan failed</li>
      </ul>
    </div>
  );
  
  export default AlertsPanel;
  