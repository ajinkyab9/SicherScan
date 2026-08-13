import { useState } from 'react';
import MainAppLayout from './components/layout/MainAppLayout';
import ScanContent from './components/layout/ScanContent';
import Dashboard from './components/layout/Dashboard';
import ScanHistory from './components/layout/History';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />
      case "scan":
        return <ScanContent />;
      // case "reports":
      //   return (
      //     <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 h-full">
      //       <h1 className="text-2xl font-bold mb-6">Reports</h1>
      //       <p>Downloadable Vulnerability reports .</p>
      //     </div>
      //   );
      case "history":
        return <ScanHistory />
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