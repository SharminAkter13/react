import React from "react";

const TableData = ({ rows }) => {
  return (
    <div className="m-5">
      <table className="table table-success table-striped-columns w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">#</th>
            <th className="border border-gray-400 px-4 py-2">Email</th>
            <th className="border border-gray-400 px-4 py-2">Password</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center py-3">
                No data yet
              </td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {row.email}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {row.password}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
