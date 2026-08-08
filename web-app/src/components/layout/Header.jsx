
export default function Header() {
    return (
        <header className="h-15 rounded-xl bg-sidebar-blue border-b border-slate-300 m-3 flex items-center px-6 shrink-0 shadow-sm"> 
          <h2 className="text-xl font-semibold text-amber-50">Scan | Workspace</h2>
          <div className="ml-auto">
            <span className="text=sm font-medium text-slate-600 bg-slate-100 px-3 py-1 rounded-full cursor-pointer">
              User
            </span>
          </div>
        </header>
    )
}