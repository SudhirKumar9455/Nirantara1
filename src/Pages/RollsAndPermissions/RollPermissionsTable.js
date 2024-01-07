import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const generateRandomData = () => {
  return Array.from({ length: 5 }, (_, index) => ({
    userId: index + 1,
    name: `User${index + 1}`,
    email: `User${index + 1}@gmail.com`,
    roll: `Manager`,
    createdBy: `James`,
    date: new Date().toLocaleDateString(),
  }));
};

const TableBody = ({ data }) => (
  <tbody>
    {data.map((row, index) => (
      <tr key={row.userId} className={index % 2 === 0 ? "even-row" : "odd-row"}>
        <td>{row.userId}</td>
        <td>
          {row.name}
          {"     "}
          <br />
          {row.email}
        </td>
        <td>{row.roll}</td>
        <td>{row.createdBy}</td>
        <td>{row.date}</td>
      </tr>
    ))}
  </tbody>
);

const RollsAndPermissionTable = () => {
  const tableData = generateRandomData();

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography variant="h5">All Users</Typography>
        </div>
        <div>
          <Button
            style={{
              width: "150px",
              height: "39px",
              padding: "5px",
              color: "black",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0.1, 0.2)",
            }}
          >
            +Add New Fuel
          </Button>
          <Button
            style={{
              width: "150px",
              height: "39px",
              padding: "5px",
              color: "black",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0.1, 0.2)",
            }}
          >
            +Add New Fuel
          </Button>
        </div>
      </div>
      {/* This is here for the table date */}
      <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name with Email</th>
              <th>Roll</th>
              <th>Created By</th>
              <th>Date</th>
            </tr>
          </thead>
          <TableBody data={tableData} />
        </table>
      </div>
    </div>
  );
};

export default RollsAndPermissionTable;
