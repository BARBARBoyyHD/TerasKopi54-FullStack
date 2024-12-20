import React, { useEffect, useRef, useState } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const TopProduct = () => {
  const chartRef = useRef(null);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Listen to WebSocket for real-time data
    socket.on("SumAllProduct", (data) => {
      setTopProducts(data);
    });

    return () => {
      socket.off("SumAllProduct"); // Cleanup WebSocket listeners
    };
  }, []);

  useEffect(() => {
    if (!chartRef.current) {
      const root = am5.Root.new("topProductChartDiv");
      chartRef.current = root;

      root.setThemes([am5themes_Animated.new(root)]);

      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX",

        })
      );

      // Set chart background to white and ensure it fills the full container
      chart.children.unshift(
        am5.Rectangle.new(root, {
          fillOpacity: 1,
          strokeOpacity: 0,
          width: am5.percent(100),
          height: am5.percent(100), // Ensure the height is 100% of the container
        })
      );

      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "product_name",
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 20,
          }),
        })
      );

      // Customize the font size for X-Axis labels
      xAxis.get("renderer").labels.template.setAll({
        fontSize: 10, // Set font size for X-Axis labels
        fill: am5.color("#f5f5f5"), // Set label color if desired
      });

      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Customize the font size for Y-Axis labels
      yAxis.get("renderer").labels.template.setAll({
        fontSize: 10, // Set font size for Y-Axis labels
        fill: am5.color("#f5f5f5"), // Set label color if desired
      });

      const series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Quantity Sold",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "total_quantity_sold",
          categoryXField: "product_name",
          tooltip: am5.Tooltip.new(root, {
            labelText: "{valueY}",
          }),
        })
      );

      // Style the columns
      series.columns.template.setAll({
        tooltipText: "{categoryX}: {valueY}",
        width: am5.percent(50),
        fill: am5.color("#4caf50"),
        stroke: am5.color("#f5f5f5"),
        strokeWidth: 1,
        cornerRadiusTL: 4,
        cornerRadiusTR: 4,
      });

      chartRef.current.chart = chart;
      chartRef.current.xAxis = xAxis;
      chartRef.current.series = series;
    }

    if (chartRef.current) {
      const { chart, xAxis, series } = chartRef.current;
      const formattedData = topProducts.map((item) => ({
        ...item,
        total_quantity_sold: Number(item.total_quantity_sold), // Convert to number
      }));
      xAxis.data.setAll(formattedData);
      series.data.setAll(formattedData);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
        chartRef.current = null;
      }
    };
  }, [topProducts]);

  return (
    <div
      id="topProductChartDiv"
      className="w-full h-full" // Set a specific height for the chart
    ></div>
  );
};

export default TopProduct;
