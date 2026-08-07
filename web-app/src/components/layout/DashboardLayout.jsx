 import Sidebar from './Sidebar';
// import Header from './Header';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 text-gray-900">
      
      {/* Left: Fixed Sidebar */}
      <Sidebar />

      {/* Right: Content Column */}
      <div className="flex-1 flex flex-col">
        {/* Fixed Header */}

        
        {/* Main Workspace (Handles its own scrolling) */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

    </div>
  );
}