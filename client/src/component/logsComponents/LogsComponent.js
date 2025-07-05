import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../config/BaseURL";
import DateLogsFilter from "./DateLogsFilter";

const LogsComponent = () => {
  const [logs, setLogs] = useState([]);
  const [range, setRange] = useState("today");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchLogs = async () => {
    try {
      const params = {
        limit: itemsPerPage,
        offset: (currentPage - 1) * itemsPerPage,
      };

      if (range) params.range = range;
      if (startDate && endDate) {
        params.start = startDate;
        params.end = endDate;
      }

      const response = await axios.get(`${BASE_URL}/api/logs`, {
        params,
        withCredentials: true,
      });

      setLogs(response.data);
    } catch (error) {
      console.error("Failed to fetch logs:", error);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [range, startDate, endDate, currentPage]);

  return (
    <div className="p-6 bg-slate-50 min-h-screen w-full">
      <h2 className="text-xl font-semibold mb-4 text-slate-800">
        Activity Logs
      </h2>

      <DateLogsFilter
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setRange={setRange}
        onFilter={() => {
          setCurrentPage(1);
          fetchLogs();
        }}
      />

      <div className="bg-white rounded shadow p-4">
        {logs.length === 0 ? (
          <p className="text-slate-500">No logs available.</p>
        ) : (
          <>
            <table className="w-full table-auto text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-700">
                  <th className="text-left px-4 py-2">#</th>
                  <th className="text-left px-4 py-2">Message</th>
                  <th className="text-left px-4 py-2">User ID</th>
                  <th className="text-left px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, index) => (
                  <tr key={log.log_id} className="border-b border-slate-200">
                    <td className="px-4 py-2">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-4 py-2">{log.message}</td>
                    <td className="px-4 py-2">{log.user_id}</td>
                    <td className="px-4 py-2">
                      {new Date(log.log_time).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center mt-4 gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-slate-200 rounded hover:bg-slate-300 disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-slate-600 mt-1">Page {currentPage}</span>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-slate-200 rounded hover:bg-slate-300"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LogsComponent;
