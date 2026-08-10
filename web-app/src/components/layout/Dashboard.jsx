import HistoricalTrendsChart from "../features/HistoricalTrendsChart";
import CVSSTrends from "../features/CVSSTrends"

export default function Dashboard() {
 
  return (

   <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-40">

      <div className="md:col-span-2 md:row-span-3 bg-slate-800 text-white p-8 rounded-3xl">
        <h3>Historical Trends</h3>
        <p>Most common type of vulnerabilities found</p>
        <HistoricalTrendsChart />
      </div>

      <div className="md:col-span-2 md:row-span-3 bg-zinc-100 text-slate-800 p-8 rounded-3xl">
        <h3>CVSS Trends</h3>
        <p>Highest & Lowest CVSS score encountered over last 4 weeks</p>
        <CVSSTrends />
    </div>

    <div className="md:col-span-2 md:row-span-1 bg-zinc-100 text-slate-800 p-6 rounded-3xl">
      <h3>Total Patches</h3>
      <p>All time code patches</p>
    </div>

    <div className="md:col-span-2 md:row-span-1 bg-slate-800 text-white p-6 rounded-3xl">
      <h3>Last Scan Summary</h3>
    </div>

  </div>
</section>

  );
    
}