import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../config/BaseURL";
import Card from "./Card";
import Chart from "./Chart";
import DateFilter from "./DateFilter";

const DashboardPanel = () => {
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [range, setRange] = useState("");

  const handleData = async (passedRange = range) => {
    try {
      const params = {};
      if (startDate && endDate) {
        params.start = startDate;
        params.end = endDate;
      } else if (passedRange) {
        params.range = passedRange;
      }

      const res = await axios.get(`${BASE_URL}/api/salesReport`, {
        params,
        withCredentials: true,
      });
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleData(); 
  }, []);

  return (
    <div className="p-6 bg-slate-50 min-h-screen w-full">
      <h1 className="text-3xl font-semibold text-slate-800 mb-6">
        Sales Report
      </h1>

      <DateFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setRange={setRange}
        onFilter={handleData}
      />

      <section className="gap-8 flex flex-col">
        {data ? <Card props={data} /> : <p>Loading cards...</p>}
        {data ? <Chart props={data} /> : <p>Loading charts...</p>}
      </section>
    </div>
  );
};

export default DashboardPanel;
