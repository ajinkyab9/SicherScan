import { LayoutDashboard, Search, Bug, ClipboardClock } from "lucide-react"

export default function Sidebar() {
    return (
        <aside className="w-72 bg-sidebar-blue text-amber-50 shrink-0 flex flex-col rounded-3xl m-1">
            <div className="h-16 flex items-center justify-center border-b border-slate-300 font-bold text-xl">
                SicherScan
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li className="p-4 flex gap-2 items-center rounded-xl cursor-pointer hover:bg-slate-300 hover:text-black transition-colors duration-300 ease-in-out">
                        <LayoutDashboard size={20}/>
                        <span className="font-medium">Dashboard</span></li>
                    <li className="p-4 flex gap-2 items-center rounded-xl cursor-pointer hover:bg-slate-300 hover:text-black transition-colors duration-300 ease-in-out">
                        <Search size={20}/>
                        <span>Scan</span></li>
                    <li className="p-4 flex gap-2 items-center rounded-xl cursor-pointer hover:bg-slate-300 hover:text-black transition-colors duration-300 ease-in-out">
                        <Bug size={20}/>
                        <span>Reports</span></li>
                    <li className="p-4 flex gap-2 items-center rounded-xl cursor-pointer hover:bg-slate-300 hover:text-black transition-colors duration-300 ease-in-out">
                        <ClipboardClock size={20}/>
                        <span>History</span></li>
                </ul>
            </nav>
        </aside>
    )
}