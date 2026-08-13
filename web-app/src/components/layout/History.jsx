import { useState } from "react";

const cmSelectStyles = "bg-slate-50 border border-slate-200 text-slate-700 rounded-lg px-3 py-2 text-sm outline-none cursor-pointer";

export default function SearchFilters() {
    const [severity, setSeverity] = useState("all");
    const [vulnType, setVulnType] = useState("all");
    const [cvss, setCvss] = useState("all");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    return (
        <div className="bg-white p-4 rounded-xl border border-slate-300 shadow-sm flex flex-wrap gap-4 items-center">
            <label htmlFor="dates">Select Dates</label>
            <div name="dates" className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
                <input type="date" value={startDate} 
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-transparent text-slate-700 outline-none cursor-pointer text-sm"/>
                <span className="text-slate-400 font-medium text-sm">to</span>
                <input type="date" value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-transparent text-slate-700 outline-none cursor-pointer text-sm"/>
            </div>
            <label htmlFor="severity">Severity</label>
            <select name="severity" value={severity} onChange={(e) => setSeverity(e.target.value)}
            className={cmSelectStyles}>
                <option value="all">Severities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <label htmlFor="vulnerabilities">Vulnerabilities</label>
            <select name="vulnerabilities" value={vulnType} onChange={(e) => setVulnType(e.target.value)}
            className={cmSelectStyles}>
                <option value="all">All</option>
                <option value="xss">XSS</option>
                <option value="sql">SQL Injection</option>
                <option value="auth">Auth Bypass</option>
            </select>
            <label htmlFor="cvss">CVSS</label>
            <select name="cvss" value={cvss} onChange={(e) => setCvss(e.target.value)}
            className={cmSelectStyles}>
                    <option value="all">All</option>
                    <option value="9+">9.0-10</option>
                    <option value="7-8.9">7-8.9</option>
                    <option value="0-6.9">&lt; 4 - 6.9</option>
            </select>

            <button
            onClick={() => console.log("Applying filters:", { severity, vulnType, cvss, startDate, endDate })}
            className="ml-auto bg-slate-800 text-amber-50 px-5 py-2 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium hover:cursor-pointer">
                Apply Filters
            </button>
        </div>
    )
}