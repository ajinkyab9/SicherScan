import { SearchCode, ShieldAlert, Bandage, ArrowUp01  } from "lucide-react"

export default function AtAGlanceStats() {
    return (
        <div className="flex items-center align-center w-full gap-2 overflow-hidden m-2 text-gray-900">
            <div className="flex align-center items-center gap-2 w-96 h-24 bg-slate-300 rounded-3xl p-4"><span><SearchCode size={20}/>Scan Status:</span></div>
            <div className="flex align-center items-center gap-2 w-96 h-24 bg-slate-300 rounded-3xl p-4"><span><ShieldAlert size={20}/>Total Vulnerabilities:</span></div>
            <div className="flex align-center items-center gap-2 w-96 h-24 bg-slate-300 rounded-3xl p-4"><span><Bandage size={20}/>Patch Status:</span></div>
            <div className="flex align-center items-center gap-2 w-96 h-24 bg-slate-300 rounded-3xl p-4"><span><ArrowUp01 size={20}/>Highest CVSS Score:</span></div>
        </div>
    )   

}