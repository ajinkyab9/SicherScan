export default function UserAnalytics() {
    return (
        <div className="bg-white p-2 mt-4 rounded-lg shadow-sm border border-slate-200 flex-1 h-full">
            <div className="p-4 w-full h-full">

                <div className="grid grid-cols-12 gap-4 h-full">

                    <div className="col-span-5 row-span-3 bg-slate-800 text-white p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition border border-slate-700">
                        <h2 className="text-xl font-bold">Main Overview</h2>
                        <p>User's stats take this place</p>
                        <ul className="text-slate-200 text-sm">
                            <li>Overall secure code score</li>
                            <li>Total Scans</li>
                            <li>Lowest vulnerability month</li>
                            <li>Highest vulnerability count in a day</li>
                            <li>Most used language</li>
                        </ul>
                    </div>

                    <div className="col-span-7 row-span-3 bg-slate-50 text-slate-800 p-6 rounded-2xl flex flex-col justify-between border border-slate-200 shadow-sm">
                        <h3 className="font-semibold text-slate-500 uppercase text-xs tracking-wider">Scope of improvement</h3>
                        <ul className="text-slate-800 text-sm">
                            <li>SQL Injection</li>
                            <li>Auth bypass</li>
                            <li>XSS</li>
                        </ul>
                        <span className="text-3xl font-bold text-slate-800">Areas of improvement</span>

                    </div>

                    <div className="col-span-3 row-span bg-rose-50 border border-rose-100 text-rose-800 p-6 rounded-2xl flex flex-col items-start justify-center shadow-sm">
                        <span className="text-sm font-medium text-rose-600 mb-1">Critical</span>
                        <span className="text-2xl font-bold">3</span>
                    </div>

                    <div className="col-span-3 row-span bg-amber-50 border border-amber-100 text-amber-800 p-6 rounded-2xl flex flex-col items-start justify-center shadow-sm">
                        <span className="text-sm font-medium text-amber-600 mb-1">High</span>
                        <span className="text-2xl font-bold">12</span>
                    </div>

                    <div className="col-span-3 row-span bg-blue-50 border border-blue-100 text-blue-800 p-6 rounded-2xl flex flex-col items-start justify-center shadow-sm">
                        <span className="text-sm font-medium text-blue-600 mb-1">Medium</span>
                        <span className="text-2xl font-bold">3</span>
                    </div>

                    <div className="col-span-3 row-span bg-emerald-50 border border-emerald-100 text-emerald-800 p-6 rounded-2xl flex flex-col items-start justify-center shadow-sm">
                        <span className="text-sm font-medium text-emerald-600 mb-1">Low</span>
                        <span className="text-2xl font-bold">4</span>
                    </div>

                    <div className="col-span-8 row-span-4 bg-white border border-slate-200 text-slate-800 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                        <span className="font-semibold text-slate-700 mb-4">Scan History Trends</span>
                        <div className="flex-1 bg-slate-50 rounded border border-slate-100 flex items-center justify-center text-slate-400 text-sm">
                            Chart Canvas Area
                        </div>
                    </div> 

                    <div className="col-span-4 row-span-4 bg-slate-200 border border-slate-200 text-slate-800 p-6 rounded-2xl flex flex-col items-start shadow-sm">
                        <span className="font-semibold text-slate-700 mb-2">Top recurring threats</span>
                        <span className="text-sm text-slate-500">Pie chart or analytical stats</span>
                    </div> 

                </div>
            </div>
        </div>
    );
}