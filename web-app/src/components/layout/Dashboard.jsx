export default function Dashboard() {
 
    const items = [
        {
            title: "Historical Trends",
            description: "Most common vulnerabilities found",
            className: "md:col-span-2 md:row-span-3 bg-slate-800 text-white p-8 rounded-3xl flex flex-col justify-between",
        },
    {
        title: "CVSS graph trends",
        description: "Score trends that were encountered",
        className: "md:col-span-2 md:row-span-2 bg-zinc-100 text-zinc-900 p-6 rounded-3xl",
    },
    {
        title: "Total Patches",
        description: "All time code patches",
        className: "md:col-span-2 md:row-span-1 bg-slate-800 text-white p-6 rounded-3xl",
    },
    {
        title: "Last Scan Summary",
        description: "",
        className: "md:col-span-4 bg-zinc-100 text-zinc-900 p-6 rounded-3xl",
    },
  ];

  return (
      <>

    <section className="max-w-7xl mx-auto px-4 py-10 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-40">
        {items.map((item, index) => (
          <div key={index} className={`${item.className} shadow-sm border border-zinc-200/50`}>
            <h3 className="text-2xl font-semibold tracking-tight mb-2">{item.title}</h3>
            <p className="text-sm opacity-80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    </>
  );
    
}