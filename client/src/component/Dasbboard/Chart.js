import React, { useEffect, useState } from "react";
import { BarChart3, Users, ShoppingCart, DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../shadcnui/card";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart as ReBarChart,
} from "recharts";

const Chart = ({props}) => {
   const [isMobile, setIsMobile] = useState(false);
    const handleMobile = () => {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
    };
    useEffect(() => {
      window.addEventListener("resize", handleMobile);
      handleMobile();
      return () => {
        window.removeEventListener("resize", handleMobile);
      };
    });

  
  return (
    <div className={`flex w-full gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
      <Card className="h-[350px] hover:shadow-lg transition-shadow w-full">
        <CardHeader>
          <CardTitle className="text-slate-700">Sales Over Time</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={props.revenue_timeseries}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="h-[350px] hover:shadow-lg transition-shadow w-full ">
        <CardHeader>
          <CardTitle className="text-slate-700">Monthly Users</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <ResponsiveContainer width="100%" height="80%">
            <ReBarChart data={props.topProducts}>
              <XAxis dataKey="product_name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="total_sold" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </ReBarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chart;
