export default function UserAnalytics() {
    return (
        <>
            <div className="bg-white p-2 mt-4 rounded-lg shadow-sm border border-gray-200 flex-1 h-full">
                <div className="p-4 w-full">
                    <div className="grid  grid-cols-9 grid-rows gap-4">

                        <div className="col-span-4 row-span-25 bg-slate-900 text-white p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition">
                            <h2 className="text-xl font-bold">Main Overview</h2>
                            <p className="text-slate-40span text-sm">User's stats take this place</p>
                        </div>

                        <div className="col-span-5 row-span-25 bg-indigo-50 text-indigo-950 p-6 rounded-2xl flex flex-col justify-between">
                            <h3 className="font-semibold">Scope of improvement</h3>
                            <span className="text-3xl font-bold">Areas of improvement</span>
                        </div>

                        
                         <div className="col-span-3 row-span-8 bg-emerald-500 text-white p-6 rounded-2xl flex items-center justify-center font-bold">
                            Information box
                        </div>

                        <div className="col-span-3 row-span-8 bg-amber-100 text-amber-900 p-6 rounded-2xl flex items-center justify-center font-medium">
                            Information box
                        </div>

                        <div className="col-span-3 row-span-8 bg-rose-500 text-white p-6 rounded-2xl flex items-center justify-center font-bold">
                            Information box
                        </div>


                        <div className="col-span-6 row-span-15 bg-blue-600 text-white p-6 rounded-2xl flex items-center justify-between">
                            <span>Stats</span>
                        </div> 

                       <div className="col-span-3 row-span-15 bg-mauve-500 text-white p-6 rounded-2xl flex items-center justify-center font-bold">
                            Information box
                        </div> 

                        
                    </div>
                </div>
            </div>
        </>
    );
}