import { useState } from 'react';
import MainAppLayout from './components/layout/MainAppLayout';
import ScanContent from './components/layout/ScanContent';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <p>Main dashboard page.</p>
          </div>
        );
      case "scan":
        return <ScanContent />;
      case "reports":
        return (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
            <h1 className="text-2xl font-bold mb-6">Reports</h1>
            <p>Downloadable Vulnerability reports .</p>
          </div>
        );
      case "history":
        return (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
            <h1 className="text-2xl font-bold mb-6">History</h1>
            <p>The tab for historical data</p>
          </div>
        );
      case "analytics":
        return (
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
            <h1 className="text-2xl font-bold mb-6">Analytics</h1>
            <p>Analytics Page</p>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <MainAppLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </MainAppLayout>
  );
}

export default App;