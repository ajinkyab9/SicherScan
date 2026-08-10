export default function Dashboard() {
 
  return (

   <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-40">
      
      <div className="md:col-span-2 md:row-span-3 bg-slate-800 text-white p-8 rounded-3xl">
        <h3>Historical Trends</h3>
        <p>Most common vulnerabilities found</p>
      </div>

      <div className="md:col-span-2 md:row-span-2 bg-zinc-100 p-6 rounded-3xl">
        <h3>CVSS Graph Trends</h3>
        <p>Score trends that were encountered</p>

      <button className="mt-4 px-4 py-2 rounded-lg bg-slate-800 text-white hover:cursor-pointer">
        View Detailed Analytics
      </button>
    </div>

    <div className="md:col-span-2 md:row-span-1 bg-slate-800 text-white p-6 rounded-3xl">
      <h3>Total Patches</h3>
      <p>All time code patches</p>
    </div>

    <div className="md:col-span-4 bg-zinc-100 p-6 rounded-3xl">
      <h3>Last Scan Summary</h3>
    </div>

  </div>
</section>

  );
    
}