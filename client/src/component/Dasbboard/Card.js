import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../shadcnui/card";
import { BarChart3, GlassWater, ShoppingCart, DollarSign } from "lucide-react";
const CardMetrics = ({ props }) => {
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
    <div className="flex flex-col gap-8">
      {/* Section 1 - Metrics */}
      <div
        className={`flex flex-wrap gap-6 ${isMobile ? "justify-center" : "justify-start"}`}
      >
        <Card className="hover:shadow-lg transition-shadow w-[250px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">
              {parseInt(props.revenue || 0).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}
            </div>
            <p className="text-xs text-slate-500 mt-1">+8.2% from last week</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow w-[250px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total Orders
            </CardTitle>
            <ShoppingCart className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{props.order}</div>
            <p className="text-xs text-slate-500 mt-1">+5.4% from last month</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow w-[250px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Total Product
            </CardTitle>
            <GlassWater className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{props.product}</div>
            <p className="text-xs text-slate-500 mt-1">+12.3% this quarter</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow w-[250px]">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-600">
              Average Order price
            </CardTitle>
            <BarChart3 className="h-5 w-5 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-slate-900">{parseInt(props.avgOrder || 0).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
              })}</div>
            <p className="text-xs text-slate-500 mt-1">
              Stable since last week
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CardMetrics;
