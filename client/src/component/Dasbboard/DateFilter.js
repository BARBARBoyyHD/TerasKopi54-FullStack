import React from "react";

const DateFilter = ({ startDate, endDate, setStartDate, setEndDate, onFilter, setRange }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6 items-end">
      <div className="flex flex-col">
        <label className="text-sm font-medium text-slate-600 mb-1">Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.target.value);
            setRange(""); // reset preset
          }}
          className="border border-gray-300 rounded px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-medium text-slate-600 mb-1">End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.target.value);
            setRange(""); // reset preset
          }}
          className="border border-gray-300 rounded px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        onClick={onFilter}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded shadow-sm"
      >
        Filter
      </button>

      <div className="flex gap-2">
        {["today", "7days", "30days"].map((r) => (
          <button
            key={r}
            onClick={() => {
              setRange(r);
              setStartDate("");
              setEndDate("");
              onFilter(r);
            }}
            className="bg-slate-200 text-slate-800 hover:bg-slate-300 px-3 py-2 rounded text-sm font-medium"
          >
            {r === "today"
              ? "Today"
              : r === "7days"
              ? "Last 7 Days"
              : "Last 30 Days"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DateFilter;
