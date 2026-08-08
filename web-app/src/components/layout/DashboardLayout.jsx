 import Sidebar from './Sidebar';
 import Header from './Header';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 text-gray-900">
      
      {/* fixed sidebar*/}
      <Sidebar />

      {/* main content column */}
      <div className="flex-1 flex flex-col">
        <Header /> 
        {/* Fixed Header */}


        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

    </div>
  );
}