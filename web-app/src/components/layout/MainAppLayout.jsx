import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainAppLayout({ children, activeTab, setActiveTab }) {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-gray-100 text-gray-900"> 
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab}/>

            <div className="flex-1 flex  flex-col">
                <Header activeTab={activeTab}/>

                <main className="flex-1 p-2">
                    {children}
                </main>
            </div>
        </div>
    );
}