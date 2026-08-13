import { LayoutDashboard, Search, Bug, ClipboardClock, ChartSpline } from "lucide-react"

export default function Sidebar({ activeTab, setActiveTab }) {

    const getClasses = (tabName) => {
        const baseClasses = "p-4 flex gap-2 items-center rounded-xl cursor-pointer transition-colors duration-300 ease-in-out";
        if (activeTab === tabName) {
            return `${baseClasses} bg-slate-300 text-black`;
        }
        return `${baseClasses} hover:bg-slate-300 hover:text-black text-amber-50`;
    }

    return (
        <aside className="w-72 bg-sidebar-blue text-amber-50 shrink-0 flex flex-col rounded-3xl m-1">
            <div className="h-16 flex items-center justify-center border-b border-slate-300 font-bold text-xl">
                SicherScan
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li onClick={() => setActiveTab('dashboard')} className={getClasses('dashboard')}>
                        <LayoutDashboard size={20}/>
                        <span className="font-medium">Dashboard</span></li>
                    <li onClick={() => setActiveTab('scan')} className={getClasses('scan')}>
                        <Search size={20}/>
                        <span>Scan</span></li>
                    {/* <li onClick={() => setActiveTab('reports')} className={getClasses('reports')}>
                        <Bug size={20}/>
                        <span>Reports</span></li> */}
                    <li onClick={() => setActiveTab('history')} className={getClasses('history')}>
                        <ClipboardClock size={20}/>
                        <span>History</span></li>
                    <li onClick={() => setActiveTab('analytics')} className={getClasses('analytics')}>
                       <ChartSpline size={20}/>
                        <span>Analytics</span>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}