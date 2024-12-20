import React, { useEffect, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const MonthlyChart = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState([]);

  useEffect(() => {
    // Listen for "MonthlyRevenue" event from WebSocket
    socket.on("MonthlyRevenue", (data) => {
      // Filter and clean data
      const cleanedData = data
        .filter((item) => item.Month) // Filter out null or invalid months
        .map((item) => ({
          month: item.Month,
          revenue: parseFloat(item.Revenue) || 0, // Ensure revenue is numeric
        }));
      setMonthlyRevenue(cleanedData);
    });

    // Cleanup WebSocket listeners on component unmount
    return () => {
      socket.off("MonthlyRevenue");
    };
  }, []);

  useEffect(() => {
    const root = am5.Root.new("monthlyChartDiv"); // Ensure a unique ID here

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        pinchZoomX: true,
      })
    );

    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: "month",
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30,
          labels:{
            fill: am5.color("#f5f5f5")
          }
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );
    xAxis.get("renderer").labels.template.setAll({
        fill: am5.color("#ffffff"), // Set font color to white
        fontSize: "14px", // Set font size
      });

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );
    yAxis.get("renderer").labels.template.setAll({
        fill: am5.color("#ffffff"), // Set font color to white
        fontSize: "14px", // Set font size
      });

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Revenue",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "revenue",
        categoryXField: "month",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    xAxis.data.setAll(monthlyRevenue);
    series.data.setAll(monthlyRevenue);

    // Cleanup chart instance on unmount
    return () => {
      root.dispose();
    };
  }, [monthlyRevenue]);

  return (
    <div id="monthlyChartDiv" className="w-[100%] h-[100%]"></div>
  );
};

export default MonthlyChart;
