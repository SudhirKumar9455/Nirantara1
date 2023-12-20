import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";

const AddNewFuelType = () => {
  const [fuelId, setFuelId] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [measurementType, setMeasurementType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();

        // Assuming the API response has properties like userId, title, and body
        setFuelId(data.userId || "");
        setFuelType(data.title || "");
        setMeasurementType(data.body || "");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Fuel ID:", fuelId);
    console.log("Fuel Type:", fuelType);
    console.log("Measurement Type:", measurementType);
  };

  const containerStyle = {
    display: "flex",
  };

  const sidebarStyle = {
    width: "20%",
  };

  const formStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    width: "450px",
    margin: "0 auto",
    height: "300px",
    marginTop: "200px",
  };

  return (
    <div style={containerStyle}>
      <div style={sidebarStyle}>
        <Sidebar />
      </div>
      <div style={{ width: "70%" }}>
        <Header />
        <div style={formStyle}>
          <h2>Fuel Master</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="fuelId">Fuel ID</label>
                <input
                  type="text"
                  id="fuelId"
                  value={fuelId}
                  onChange={(e) => setFuelId(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="fuelType">Fuel Type</label>
                <input
                  type="text"
                  id="fuelType"
                  value={fuelType}
                  onChange={(e) => setFuelType(e.target.value)}
                  required
                />
              </div>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <div style={{ marginRight: "10px" }}>
                <label htmlFor="measurementType">Measurement Type</label>
                <br />
                <input
                  type="text"
                  id="measurementType"
                  value={measurementType}
                  onChange={(e) => setMeasurementType(e.target.value)}
                  required
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                style={{ color: "white", backgroundColor: "black" }}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewFuelType;
