import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const socket = io("http://localhost:3000");

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const handleRandomValue = (value) => {
      setData((prev) => {
        const updated = [
          ...prev,
          {
            time: new Date().toLocaleTimeString(),
            value,
          },
        ];
        return updated.slice(-10); // keep last 10 points
      });
    };

    socket.on("randomValue", handleRandomValue);

    return () => {
      socket.off("randomValue", handleRandomValue);
    };
  }, []);

  return (
    <>
      {/* LINE CHART */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="blue" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" nameKey="time" outerRadius={100}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default App;
