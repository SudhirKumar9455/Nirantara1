import React from "react";
import HCV from "../../utils/Group 33.png";
import LCV from "../../utils/Group 33 (1).png";
import MCV from "../../utils/Group 33 (2).png";
import EV from "../../utils/EV.png";
import {
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ComposedChart,
} from "recharts";
// import { Tooltip } from "chart.js";
const ChartComponent = () => {
  const data = [
    {
      name: "Page A1",
      thismonth: 4000,
      lastmonth: 2400,
    },
    {
      name: "Page B1",
      thismonth: 3000,
      lastmonth: 1398,
    },
    {
      name: "Page C1",
      thismonth: 2000,
      lastmonth: 9800,
    },
    {
      name: "Page D1",
      thismonth: 2780,
      lastmonth: 3908,
    },
    {
      name: "Page E1",
      thismonth: 1890,
      pv: 4800,
    },
    
  ];
  const data2=[
    {
        name: "Page A2",
        "petrol": 4000,
        "pv": 2400,
        "amt": 2400
      },
      {
        name: "Page B2",
        "petrol": 3000,
        "pv": 1398,
        "amt": 2210
      },
      {
        name: "Page C2",
        "petrol": 2000,
        "pv": 9800,
        "amt": 2290
      },
      {
        name: "Page D2",
        "petrol": 2780,
        "pv": 3908,
        "amt": 2000
      },
      {
        name: "Page E2",
        "petrol": 1890,
        "pv": 4800,
        "amt": 2181
      },
      {
        name: "Page F2",
        "petrol": 2390,
        "pv": 3800,
        "amt": 2500
      }
]
  return (
    <div className="container">
      <div className="topcontainer">
        {/* Container for the 1st Container in the first Row */}
        <div className="topcontainer1">
          <div className="topcontainer1row1">
            <div>Current Emission</div>
            <div>
              <h2>
                <b>600</b>
              </h2>
            </div>
          </div>
          <div className="topcontainer1row2">
            <div>Graph For Measurement</div>
          </div>
          <div className="topcontainer1row3">
            <div>Current Emission</div>
            <div>
              <h2>
                <b>6000</b>
              </h2>
            </div>
          </div>
        </div>
        {/* Container for the 2nd Container in the first Row */}
        <div className="topcontainer2">
          <div className="smalltopcontainer2col1">
            <div className="smalltopcontainer2col1row1">
              <div>All trips</div>
              <div>
                <h2>500</h2>
              </div>
            </div>
            <div className="smalltopcontainer2col1row2">See Details</div>
          </div>
          <div className="smalltopcontainer2col1row2">
            <div className="smalltopcontainer2col1row1">
              <div>Pending</div>
              <div>
                <h7>
                  <b>120</b>
                </h7>
              </div>
            </div>
            <div className="smalltopcontainer2col1row2">See Details</div>
          </div>
          <div className="smalltopcontainer2col3">
            <div className="smalltopcontainer2col1row1">
              <div>Approved</div>
              <div>
                <b>300</b>
              </div>
            </div>
            <div className="smalltopcontainer2col1row2">See Details</div>
          </div>
          <div className="smalltopcontainer2col4">
            <div className="smalltopcontainer2col1row1">
              <div>In Review</div>
              <div>
                <b>100</b>
              </div>
            </div>
            <div className="smalltopcontainer2col1row2">See Details</div>
          </div>
        </div>
        {/* Container for the 3rd Container in the first Row */}
        <div className="topcontainer3">
          <div className="container1">
            <div
              className="topcontainerSmaller1"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={HCV} />
              </div>
              <div>HCV</div>
              <div>25</div>
            </div>
            <div
              className="topcontainerSmaller2"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={LCV} />
              </div>
              <div>LCV</div>
              <div>25</div>
            </div>
          </div>
          <div className="container2">
            <div
              className="topcontainerSmaller3"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={MCV} />
              </div>
              <div>MCV</div>
              <div>25</div>
            </div>
            <div
              className="topcontainerSmaller4"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <img src={EV} />
              </div>
              <div>EV</div>
              <div>25</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomcontainer">
        <div className="bottomcontainer1">
          <BarChart width={500} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="thismonth" fill="blue" />
            <Bar dataKey="lastmonth" fill="#EFA348" />
          </BarChart>
        </div>
        <div className="bottomcontainer2">
          <ComposedChart width={500} height={250} data={data2}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            
            <Bar dataKey="pv" fill="#EFA348" />
          </ComposedChart>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
