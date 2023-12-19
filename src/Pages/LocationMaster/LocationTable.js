import React from "react";
import { Link } from "react-router-dom";

const LocationTable = () => {
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
          <h2>Location Master</h2>
        </div>
        <Link to="/AddNewLocationMaster">
          <button
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "5px",
              border: "none",
              boxShadow: "0px 4px 8px rgba(0, 0, 0.6, 0.6)",
            }}
          >
            <h6>+ Add New Data</h6>
          </button>
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Location Id</th>
            <th scope="col">Location Name</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LocationTable;
