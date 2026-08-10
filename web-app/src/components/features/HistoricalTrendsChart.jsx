import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend
} from "recharts";

// sample data before i connect the backend
const data = [
  { category: "Dependencies", lastMonth: 24, thisMonth: 13 },
  { category: "XSS", lastMonth: 12, thisMonth: 8 },
  { category: "SQL Injection", lastMonth: 18, thisMonth: 12 },
  { category: "Misconfigs", lastMonth: 15, thisMonth: 18 },
  { category: "Auth Bypass", lastMonth: 10, thisMonth: 5 },
];

// #endregion
export default function HistoricalTrendsChart() {
  return (
    <ResponsiveContainer width="100%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" tick={{ fill: "#d4d4d8", fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 'dataMax']} tick={{fill: "#a1a1aa"}}/>
            <Tooltip />
            <Legend />
            <Radar name="Last Month" dataKey="lastMonth" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3}/>
            <Radar name="This Month" dataKey="thisMonth" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6}/>
        </RadarChart>
    </ResponsiveContainer>
  );
}

