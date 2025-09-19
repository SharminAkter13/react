import React from "react";

const TableData = ({ rows }) => {
  return (
    <div>
      <table className="table table-info-subtle table-striped-columns m-5 p-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No data yet</td>
            </tr>
          ) : (
            rows.map((row, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{row.email}</td>
                <td>{row.password}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
