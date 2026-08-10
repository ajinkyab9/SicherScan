import { ChevronDown } from "lucide-react"

export default function Header({ activeTab }) {
  const dynamicFormattedTab = activeTab.charAt(0).toUpperCase() + activeTab.slice(1);
    return (
        <header className="h-15 rounded-xl bg-sidebar-blue border-b border-slate-300 m-3 flex items-center px-6 shrink-0 shadow-sm"> 
          <h2 className="text-xl font-semibold text-amber-50">{dynamicFormattedTab}</h2>
          <div className="ml-auto">
            <span className="flex items-center align-middle text=sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full cursor-pointer">
              User | <ChevronDown />
            </span>
          </div>
        </header>
    )
}