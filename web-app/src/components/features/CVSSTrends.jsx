import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// sample data until i connect the backend
const data = [
  { week: 'One', Highest: 9.8, Lowest: 7.5 },
  { week: 'Two', Highest: 4.5, Lowest: 3 },
  { week: 'Three', Highest: 8.5, Lowest: 4 },
  { week: 'Four', Highest: 9, Lowest: 1.5 },
];

export default function CvssTrendsChart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{top:10, right:10, left: -20, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e4e7"/>
            <XAxis dataKey="week" stroke="#71717a" fontSize={12} tickMargin={10}/>
            <YAxis stroke="#71717a" fontSize={12} domain={[0, 10]} tickMargin={10}/>

            <Tooltip contentStyle={{
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
            }}
            />
            <Legend wrapperStyle={{ paddingTop: "10px" }}/>
            <Line
                type="monotone"
                name="Lowest CVSS"
                dataKey="Lowest"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r:4, fill: "#3b82f6" }}
                activeDot={{ r:6 }}
            />
            <Line
                type="monotone"
                name="Highest CVSS"
                dataKey="Highest"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r:4, fill: "#ef4444" }}
                activeDot={{ r:6 }}
            />
        </LineChart>
    </ResponsiveContainer>
    )
}