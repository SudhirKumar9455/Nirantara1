import React from "react";
import { Link } from "react-router-dom";

const FuelTable = () => {
  // Sample data for testing
  const fuelData = [
    { id: 1, name: "Petrol", measurement: "Liters" },
    { id: 2, name: "Diesel", measurement: "Liters" },
    { id: 3, name: "Natural Gas", measurement: "Cubic Meters" },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>Fuel Master</h2>
        </div>
        <Link to="/AddNewFuelType">
          <button
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "5px",
              border:'none',
              boxShadow: "0px 4px 8px rgba(0, 0, 0.1, 0.6)",
            }}
          >
            <h6>+ Add New Data</h6>
          </button>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Fuel ID</th>
            <th scope="col">Fuel Name</th>
            <th scope="col">Fuel Measurement</th>
          </tr>
        </thead>
        <tbody>
          {fuelData.map((fuel) => (
            <tr key={fuel.id}>
              <th scope="row">{fuel.id}</th>
              <td>{fuel.name}</td>
              <td>{fuel.measurement}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FuelTable;
