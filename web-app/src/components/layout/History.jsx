import { useState } from "react";
import { fetchScanHistory } from "../../api/scanHistoryApi";
import { useEffect } from "react";

const cmSelectStyles = "bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer";

const assignSeverityBadge = (tableRowSeverity) => {
    switch (tableRowSeverity.toLowerCase()) {
        case "critical": return "bg-red-100 text-red-700 border-red-200";
        case "high": return "bg-orange-100 text-orange-700 border-orange-200";
        case "medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
        case "low": return "bg-blue-100 text-blue-700 border-blue-200";
        case "info": return "bg-slate-100 text-slate-700 border-slate-200"
        default: return "bg-slate-100 text-slate-700 border-slate-200";
    }
}

export default function SearchFilters() {
    const [severity, setSeverity] = useState("all");
    const [vulnType, setVulnType] = useState("all");
    const [cvss, setCvss] = useState("all");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [allScans, setAllScans] = useState([]);
    const [displayedScans, setDisplayedScans] = useState([]);
    const [uniqueVulnTypes, setUniqueVulnTypes] = useState([]);


    useEffect(() => {
        const loadScanHistory = async () => {
            try {
                const scanHistoryData = await fetchScanHistory();

                const flatHistoryData = scanHistoryData.flatMap((scan) => {
                    return scan.vulnerabilities.map((vuln, index) => ({
                        id: `${scan.id}-${index}`,
                        date: scan.createDate.split("T")[0],
                        type: vuln.vulType,
                        language: scan.codeLang,
                        severity: vuln.severity,
                        cvss: vuln.cvssBaseScore
                    }));
                });
                const vulTypesArray = [...new Set(flatHistoryData.map(item => item.type))].sort();

                setUniqueVulnTypes(vulTypesArray);
                setAllScans(flatHistoryData);
                setDisplayedScans(flatHistoryData);
            } catch (error) {
                console.error("Failed to load scan history", error);
            }

        };
        loadScanHistory();
    }, []);

    const applyFilters = () => {
        const filterResults = allScans.filter((scan) => {
            const matchSeverity = severity === "all" || scan.severity.toLowerCase() === severity.toLowerCase();
            const matchVulnType = vulnType === "all" || scan.type.toLowerCase() === vulnType.toLowerCase();

            let matchCvss = false;
            if (cvss === "all") matchCvss = true;
            else if (cvss === "9+" && scan.cvss >= 9.0) matchCvss = true;
            else if (cvss === "7-8.9" && scan.cvss >= 7.0 && scan.cvss <= 8.9) matchCvss = true;
            else if (cvss === "0-6.9" && scan.cvss < 7.0) matchCvss = true;

            const matchStartDate = startDate === "" || scan.date >= startDate;
            const matchEndDate = endDate === "" || scan.date <= endDate;

            return matchSeverity && matchVulnType && matchCvss && matchStartDate && matchEndDate;
        });
        setDisplayedScans(filterResults);
    }

    const clearAllFilters = () => {
        setSeverity("all");
        setVulnType("all");
        setCvss("all");
        setStartDate("");
        setEndDate("");
        setDisplayedScans(allScans);
    }

    return (
        <>
            <div className="bg-white p-4 rounded-xl border border-slate-300 shadow-sm flex flex-wrap gap-4 items-center">
                <label htmlFor="dates">Select Dates</label>
                <div name="dates" className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                    <input type="date" value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="bg-transparent text-slate-700 outline-none cursor-pointer text-sm" />
                    <span className="text-slate-400 font-medium text-sm">to</span>
                    <input type="date" value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="bg-transparent text-slate-700 outline-none cursor-pointer text-sm" />
                </div>
                <label htmlFor="severity">Severity</label>
                <select name="severity" value={severity} onChange={(e) => setSeverity(e.target.value)}
                    className={cmSelectStyles}>
                    <option value="all">All</option>
                    <option value="critical">Critical</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    <option value="info">Info</option>
                </select>
                <label htmlFor="vulnerabilities">Vulnerabilities</label>
                <select name="vulnerabilities" value={vulnType} onChange={(e) => setVulnType(e.target.value)}
                    className={cmSelectStyles}>
                    <option value="all">All</option>
                    {uniqueVulnTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
                <label htmlFor="cvss">CVSS</label>
                <select name="cvss" value={cvss} onChange={(e) => setCvss(e.target.value)}
                    className={cmSelectStyles}>
                    <option value="all">All</option>
                    <option value="9+">9.0-10</option>
                    <option value="7-8.9">7-8.9</option>
                    <option value="0-6.9">0 - 6.9</option>
                </select>

                <button
                    onClick={applyFilters}
                    className="ml-auto bg-slate-800 text-amber-50 px-5 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium hover:cursor-pointer">
                    Apply Filters
                </button>
                <button
                    onClick={clearAllFilters}
                    className="bg-slate-800 text-amber-50 px-5 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium hover:cursor-pointer"
                >
                    Clear
                </button>
            </div>

            <div className="mt-6 bg-zinc-200 border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-zinc-50 border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-medium">
                                <th className="p-4">Scan Date</th>
                                <th className="p-4">Vulnerability</th>
                                <th className="p-4">Language</th>
                                <th className="p-4">Severity</th>
                                <th className="p-4">CVSS</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 text-sm text-slate-700">
                            {displayedScans.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-slate-500">
                                        No vulnerabilities match your current filters.
                                    </td>
                                </tr>
                            ) : (
                                displayedScans.map((scan) => (
                                    <tr key={scan.id} className="hover:bg-slate-50">
                                        <td className="p-4">{scan.date}</td>
                                        <td className="p-4 font-medium text-slate-900">{scan.type}</td>
                                        <td className="p-4 font-mono text-xs">{scan.language}</td>
                                        <td className="p-4">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${assignSeverityBadge(scan.severity)}`}>
                                                {scan.severity}
                                            </span>
                                        </td>
                                        <td className="p-4 font-semibold">{scan.cvss}</td>
                                    </tr>
                                )
                                ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
