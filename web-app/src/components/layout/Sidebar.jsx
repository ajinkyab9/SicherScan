// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-gray-900 text-white flex-shrink-0 flex flex-col">
//       <div className="h-16 flex items-center justify-center border-b border-gray-800 font-bold text-xl">
//         Scanner Pro
//       </div>
//       <nav className="flex-1 p-4">
//         <ul className="space-y-2">
//           <li className="p-2 bg-gray-800 rounded cursor-pointer">Dashboard</li>
//           <li className="p-2 hover:bg-gray-800 rounded cursor-pointer transition-colors">Scans</li>
//           <li className="p-2 hover:bg-gray-800 rounded cursor-pointer transition-colors">Settings</li>
//         </ul>
//       </nav>
//     </aside>
//   );
// }

import { LayoutDashboard, Search, Bug, ClipboardClock } from "lucide-react"

export default function Sidebar() {
    return (
        <aside className="w-72 bg-sidebar-blue text-amber-50 shrink-0 flex flex-col rounded-3xl m-1">
            <div className="h-16 flex items-center justify-center border-b border-slate-300 font-bold text-xl">
                SiloScan
            </div>
            <nav className="flex-1 p-4">
                <ul className="space-y-2">
                    <li className="p-4 flex gap-2 items-center rounded cursor-pointer hover:bg-slate-300 hover:text-black">
                        <LayoutDashboard size={20}/>
                        <span className="font-medium">Dashboard</span></li>
                    <li className="p-4 flex gap-2 items-center rounded cursor-pointer hover:bg-slate-300 hover:text-black">
                        <Search size={20}/>
                        <span>Scans</span></li>
                    <li className="p-4 flex gap-2 items-center rounded cursor-pointer hover:bg-slate-300 hover:text-black">
                        <Bug size={20}/>
                        <span>Reports</span></li>
                    <li className="p-4 flex gap-2 items-center rounded cursor-pointer hover:bg-slate-300 hover:text-black">
                        <ClipboardClock size={20}/>
                        <span>History</span></li>
                </ul>
            </nav>
        </aside>
    )
}