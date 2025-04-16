const SystemHealth = () => (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">System Health</h2>
      <p>Status: <span className="text-green-600 font-bold">Operational</span></p>
      <p>Last Checked: {new Date().toLocaleTimeString()}</p>
    </div>
  );
  
  export default SystemHealth;
  